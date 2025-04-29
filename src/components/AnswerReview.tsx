import React from 'react';
import { Question } from '../data/questions';
import { Check, X, Clock, ChevronRight, Award } from 'lucide-react';
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
    <div className="max-w-xl mx-auto p-6">
      {/* Main container with subtle backdrop blur */}
      <div className="relative backdrop-blur-sm bg-white/70 rounded-xl shadow-xl overflow-hidden border border-white/40">
        {/* Background gradient for linear effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-blue-50/80 -z-10"></div>
        
        {/* Large light reflection */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl"></div>
        
        {/* Color bar on top */}
        <div className={`w-full h-2 ${isCorrect ? 'bg-gradient-to-r from-green-500 to-green-400' : 'bg-gradient-to-r from-red-500 to-red-400'}`}></div>
        
        <div className="p-6">
          {/* Header with result */}
          <div className="flex justify-between items-center mb-4 relative">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
              {question.productName}
            </h2>
            <div className={`flex items-center gap-1 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/40 shadow-sm ${
              isCorrect 
                ? 'bg-gradient-to-r from-green-500/20 to-green-400/20 text-green-600' 
                : 'bg-gradient-to-r from-red-500/20 to-red-400/20 text-red-600'
            }`}>
              {isCorrect 
                ? <><Check className="w-4 h-4" /> Correct</> 
                : <><X className="w-4 h-4" /> Incorrect</>
              }
            </div>
          </div>
          
          {/* Product image */}
          <div className="relative mb-6 rounded-xl overflow-hidden border border-white/40 shadow-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
            <img 
              src={question.imageUrl} 
              alt={question.productName}
              className="w-full h-56 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 z-20">
              <p className="text-white font-medium">{question.category}</p>
            </div>
          </div>
          
          {/* Question and answers */}
          <div className="mb-6">
            <div className="relative backdrop-blur-sm border border-white/40 rounded-xl p-4 mb-4 bg-white/30">
              <h3 className="text-gray-700 mb-1 font-medium">{question.question}</h3>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2 font-medium">Votre réponse</p>
                <div className={`p-4 rounded-xl backdrop-blur-sm border ${
                  isCorrect 
                    ? 'border-green-300 bg-gradient-to-br from-green-500/10 to-green-300/20' 
                    : 'border-red-300 bg-gradient-to-br from-red-500/10 to-red-300/20'
                }`}>
                  {userAnswer || 'Temps écoulé (pas de réponse)'}
                </div>
              </div>
              
              {!isCorrect && (
                <div className="flex-1">
                  <p className="text-sm text-gray-500 mb-2 font-medium">Réponse correcte</p>
                  <div className="p-4 rounded-xl backdrop-blur-sm border border-green-300 bg-gradient-to-br from-green-500/10 to-green-300/20">
                    {question.correctAnswer}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Explanation */}
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-300/20 rounded-xl -z-10"></div>
            <div className="backdrop-blur-sm bg-white/20 border border-white/40 rounded-xl p-5 shadow-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-100/30 rounded-full blur-xl"></div>
              <h3 className="font-semibold text-blue-700 mb-2 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Saviez-vous ?
              </h3>
              <p className="text-blue-800">{question.explanation}</p>
            </div>
          </div>
          
          {/* Score and time */}
          <div className="flex justify-between items-center mb-6 p-3 backdrop-blur-sm bg-white/30 border border-white/40 rounded-xl">
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-amber-600 mr-2" />
              <span className="text-gray-700">Temps: {timeTaken.toFixed(1)}s</span>
            </div>
            <div className="font-semibold text-lg bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              +{points} points
            </div>
          </div>
          
          {/* Continue button with glassmorphism */}
          <div className="relative">
            <button
              onClick={onContinue}
              className="w-full py-3 bg-gradient-to-r from-green-500 to-green-400 border border-green-400/50 text-white rounded-xl font-semibold flex items-center justify-center transition-all hover:shadow-lg hover:from-green-600 hover:to-green-500 active:scale-95 backdrop-blur-sm"
            >
              Continuer <ChevronRight className="w-5 h-5 ml-2" />
            </button>
            <div className="absolute inset-0 bg-green-400/20 rounded-xl blur-md -z-10 transform translate-y-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerReview;