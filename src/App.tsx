import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import AnswerReview from './components/AnswerReview';
import ResultsScreen from './components/ResultsScreen';
import { filterQuestions, calculateScore } from './utils/gameHelpers';
import { Question } from './data/questions';
import { GameSettings, GameState, PlayerAnswer } from './types/game';

function App() {
  const [gameState, setGameState] = useState<GameState>('welcome');
  const [settings, setSettings] = useState<GameSettings | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [playerAnswers, setPlayerAnswers] = useState<PlayerAnswer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<PlayerAnswer | null>(null);
  
  // Initialize game with settings
  const handleStart = (newSettings: GameSettings) => {
    const gameQuestions = filterQuestions(
      newSettings.difficulty, 
      newSettings.categories,
      newSettings.questionsCount
    );
    
    setSettings(newSettings);
    setQuestions(gameQuestions);
    setPlayerAnswers([]);
    setCurrentQuestionIndex(0);
    setGameState('playing');
  };
  
  // Handle user answer to current question
  const handleAnswer = (answer: string, timeTaken: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    const newAnswer: PlayerAnswer = {
      questionId: currentQuestion.id,
      answer,
      isCorrect,
      timeTaken
    };
    
    setCurrentAnswer(newAnswer);
    setGameState('review');
  };
  
  // Continue to next question after reviewing answer
  const handleContinue = () => {
    if (currentAnswer) {
      setPlayerAnswers([...playerAnswers, currentAnswer]);
      setCurrentAnswer(null);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setGameState('playing');
    } else {
      setGameState('results');
    }
  };
  
  // Restart the game
  const handleRestart = () => {
    setGameState('welcome');
    setSettings(null);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setPlayerAnswers([]);
    setCurrentAnswer(null);
  };
  
  // Update page title based on game state
  useEffect(() => {
    const titles = {
      welcome: '🌾 EcoQuizz - Mangeons Local, pensons global 🌾',
      playing: `Question ${currentQuestionIndex + 1} - Local Battle`,
      review: 'Answer Review - Local Battle',
      results: 'Your Results - Local Battle'
    };
    document.title = titles[gameState];
  }, [gameState, currentQuestionIndex]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 py-8 px-4">
      <div className="container mx-auto">
        {gameState === 'welcome' && (
          <WelcomeScreen onStart={handleStart} />
        )}
        
        {gameState === 'playing' && settings && (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            timeLimit={settings.timePerQuestion}
            onAnswer={handleAnswer}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={questions.length}
          />
        )}
        
        {gameState === 'review' && settings && currentAnswer && (
          <AnswerReview
            question={questions[currentQuestionIndex]}
            userAnswer={currentAnswer.answer}
            isCorrect={currentAnswer.isCorrect}
            timeTaken={currentAnswer.timeTaken}
            onContinue={handleContinue}
            timeLimit={settings.timePerQuestion}
          />
        )}
        
        {gameState === 'results' && (
          <ResultsScreen
            score={calculateScore([...playerAnswers])}
            answers={playerAnswers}
            questions={questions}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
}

export default App;