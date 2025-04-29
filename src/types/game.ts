export type Difficulty = 'facile' | 'moyen' | 'difficile';
export type Category = 'origine' | 'saisonnalité' | 'distribution';
export type GameState = 'welcome' | 'playing' | 'review' | 'results';
export type Answer = null | string;

export interface GameSettings {
  difficulty: Difficulty | 'all';
  categories: Category[];
  questionsCount: number;
  timePerQuestion: number;
}

export interface PlayerAnswer {
  questionId: number;
  answer: string;
  isCorrect: boolean;
  timeTaken: number;
}

export interface GameScore {
  correct: number;
  total: number;
  streak: number;
  highestStreak: number;
  averageTime: number;
  points: number;
}