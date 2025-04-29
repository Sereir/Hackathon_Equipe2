import React, { useState, useEffect } from 'react';
import { Question } from '../data/questions';
import { Timer, AlertCircle } from 'lucide-react';
import { formatTime } from '../utils/gameHelpers';

interface QuestionCardProps {
  question: Question;
  timeLimit: number;
  onAnswer: (answer: string, timeTaken: number) => void;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  timeLimit, 
  onAnswer,
  currentQuestionIndex,
  totalQuestions
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [timeElapsed, setTimeElapsed] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          if (!selectedAnswer) {
            onAnswer('', timeLimit); // Time's up, submit empty answer
          }
          return 0;
        }
        setTimeElapsed(timeLimit - prev + 1);
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLimit, onAnswer, selectedAnswer]);
  
  const handleSelectAnswer = (answer: string) => {
    if (selectedAnswer) return; // Prevent changing answer after selection
    
    setSelectedAnswer(answer);
    onAnswer(answer, timeElapsed);
  };
  
  // Category styling
  const getCategoryStyle = () => {
    switch(question.category) {
      case 'origine':
        return 'bg-blue-100 text-blue-600';
      case 'saisonnalité':
        return 'bg-orange-100 text-orange-600';
      case 'distribution':
        return 'bg-purple-100 text-purple-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };
  
  // Difficulty styling
  const getDifficultyStyle = () => {
    switch(question.difficulty) {
      case 'facile':
        return 'bg-green-100 text-green-600';
      case 'moyen':
        return 'bg-yellow-100 text-yellow-600';
      case 'difficile':
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  // Calculate progress percentage
  const progressPercentage = (timeLeft / timeLimit) * 100;
  
  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Progress bar and question counter */}
      <div className="relative w-full h-2 bg-gray-200">
        <div 
          className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-1000 ease-linear"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <div className="p-6">
        {/* Header with category, difficulty and timer */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryStyle()}`}>
              {question.category.charAt(0).toUpperCase() + question.category.slice(1)}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyStyle()}`}>
              {question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">
              Question {currentQuestionIndex + 1}/{totalQuestions}
            </span>
            <div className={`flex items-center ${timeLeft < 5 ? 'text-red-500 animate-pulse' : 'text-gray-600'}`}>
              <Timer className="w-4 h-4 mr-1" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
        
        {/* Product image */}
        <div className="relative mb-4 rounded-lg overflow-hidden">
          <img 
            src={question.imageUrl} 
            alt={question.productName}
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <h3 className="text-white font-semibold">{question.productName}</h3>
          </div>
        </div>
        
        {/* Question */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{question.question}</h2>
          <div className={`flex items-center ${timeLeft < 5 ? 'text-red-500' : 'text-gray-600'}`}>
            {timeLeft < 5 && <AlertCircle className="w-4 h-4 mr-1" />}
            {timeLeft < 5 ? 'Hurry up!' : ''}
          </div>
        </div>
        
        {/* Answer options */}
        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelectAnswer(option)}
              disabled={selectedAnswer !== null}
              className={`p-4 border rounded-lg text-left transition-all ${
                selectedAnswer === option
                  ? 'border-green-500 bg-green-50'
                  : selectedAnswer !== null
                  ? 'opacity-60 cursor-not-allowed'
                  : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
              }`}
            >
              <span className="font-medium">{option}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;