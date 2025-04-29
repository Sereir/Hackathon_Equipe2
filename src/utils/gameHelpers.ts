import { questions } from '../data/questions';
import { Category, Difficulty, GameScore, PlayerAnswer } from '../types/game';

/**
 * Filter questions based on difficulty and categories
 */
export const filterQuestions = (
  difficulty: Difficulty | 'all', 
  categories: Category[],
  count: number
) => {
  let filtered = [...questions];
  
  if (difficulty !== 'all') {
    filtered = filtered.filter(q => q.difficulty === difficulty);
  }
  
  if (categories.length > 0) {
    filtered = filtered.filter(q => categories.includes(q.category));
  }
  
  // Shuffle the questions and take the requested count
  return shuffleArray(filtered).slice(0, count);
};

/**
 * Calculate the final score based on player answers
 */
export const calculateScore = (answers: PlayerAnswer[]): GameScore => {
  const correct = answers.filter(a => a.isCorrect).length;
  const total = answers.length;
  
  // Calculate streaks
  let currentStreak = 0;
  let highestStreak = 0;
  
  for (const answer of answers) {
    if (answer.isCorrect) {
      currentStreak++;
      highestStreak = Math.max(highestStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  }
  
  // Calculate average time (in seconds)
  const totalTime = answers.reduce((sum, answer) => sum + answer.timeTaken, 0);
  const averageTime = total > 0 ? totalTime / total : 0;
  
  // Calculate points (correct answers + time bonus + streak bonus)
  const timeBonus = answers.reduce((sum, a) => {
    return sum + (a.isCorrect ? Math.max(10 - Math.floor(a.timeTaken), 0) : 0);
  }, 0);
  
  const points = (correct * 10) + timeBonus + (highestStreak * 5);
  
  return {
    correct,
    total,
    streak: currentStreak,
    highestStreak,
    averageTime,
    points
  };
};

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

/**
 * Format time in seconds to mm:ss
 */
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Calculate the points for an answer based on correctness and time taken
 */
export const calculateQuestionPoints = (isCorrect: boolean, timeTaken: number, maxTime: number): number => {
  if (!isCorrect) return 0;
  
  // Base points for correct answer
  const basePoints = 10;
  
  // Time bonus (faster answers get more points)
  const timeRatio = 1 - (timeTaken / maxTime);
  const timeBonus = Math.floor(timeRatio * 5);
  
  return basePoints + timeBonus;
};