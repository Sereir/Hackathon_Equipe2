import React from 'react';
import { Question } from '../data/questions';
import { Check, X, Clock, ChevronRight } from 'lucide-react';
import { calculateQuestionPoints } from '../utils/gameHelpers';

interface AnswerReviewProps {
  question: Question;
  userAnswer: string;
  isCorrect: boolean;
  timeTaken: number;
  onContinue: () => void;
  timeLimit: number;
}

const AnswerReview: React.FC<AnswerReviewProps> = ({
  question,
  userAnswer,
  isCorrect,
  timeTaken,
  onContinue,
  timeLimit
}) => {
  const points = calculateQuestionPoints(isCorrect, timeTaken, timeLimit);
  
  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className={`w-full h-2 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}></div>
      
      <div className="p-6">
        {/* Header with result */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{question.productName}</h2>
          <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${
            isCorrect 
              ? 'bg-green-100 text-green-600' 
              : 'bg-red-100 text-red-600'
          }`}>
            {isCorrect 
              ? <><Check className="w-4 h-4" /> Correct</> 
              : <><X className="w-4 h-4" /> Incorrect</>
            }
          </div>
        </div>
        
        {/* Product image */}
        <div className="relative mb-6 rounded-lg overflow-hidden">
          <img 
            src={question.imageUrl} 
            alt={question.productName}
            className="w-full h-48 object-cover"
          />
        </div>
        
        {/* Question and answers */}
        <div className="mb-6">
          <h3 className="text-gray-700 mb-3">{question.question}</h3>
          
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">Votre réponse</p>
              <div className={`p-3 rounded-lg border ${
                isCorrect 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-red-500 bg-red-50'
              }`}>
                {userAnswer || 'Times up (no answer)'}
              </div>
            </div>
            
            {!isCorrect && (
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Réponse juste</p>
                <div className="p-3 rounded-lg border border-green-500 bg-green-50">
                  {question.correctAnswer}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Explanation */}
        <div className="mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
          <h3 className="font-semibold text-blue-700 mb-2">Fun Fact</h3>
          <p className="text-blue-800">{question.explanation}</p>
        </div>
        
        {/* Score and time */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Clock className="w-4 h-4 text-gray-600 mr-2" />
            <span className="text-gray-700">Time: {timeTaken.toFixed(1)}s</span>
          </div>
          <div className="font-semibold text-lg">
            +{points} points
          </div>
        </div>
        
        {/* Continue button */}
        <button
          onClick={onContinue}
          className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold flex items-center justify-center hover:bg-green-600 active:scale-95 transition-transform"
        >
          Continuer <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default AnswerReview;