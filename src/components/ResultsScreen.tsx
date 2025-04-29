import React from "react";
import { Trophy, Clock, Zap, BarChart, RefreshCw } from "lucide-react";
import { GameScore, PlayerAnswer } from "../types/game";
import { Question } from "../data/questions";

interface ResultsScreenProps {
  score: GameScore;
  answers: PlayerAnswer[];
  questions: Question[];
  onRestart: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  score,
  answers,
  questions,
  onRestart,
}) => {
  // Calculate percentage correct
  const percentage = Math.round((score.correct / score.total) * 100);

  // Create a message based on the score
  const getMessage = () => {
    if (percentage >= 90) return "Amazing! You're a local food expert!";
    if (percentage >= 70) return "Great job! You know your local foods well!";
    if (percentage >= 50)
      return "Good effort! You're learning about local foods.";
    return "Keep learning about local products!";
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-green-500 mb-2">
          Résultats du quiz
        </h1>
        <p className="text-gray-600">{getMessage()}</p>
      </div>

      {/* Score summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <Trophy className="w-6 h-6 text-green-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Score</p>
          <p className="text-2xl font-bold text-green-600">{score.points}</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <BarChart className="w-6 h-6 text-blue-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Accuracy</p>
          <p className="text-2xl font-bold text-blue-600">{percentage}%</p>
          <p className="text-xs text-gray-500">
            {score.correct}/{score.total} correct
          </p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <Zap className="w-6 h-6 text-purple-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Meilleure série</p>
          <p className="text-2xl font-bold text-purple-600">
            {score.highestStreak}
          </p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg text-center">
          <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Temps Moyen</p>
          <p className="text-2xl font-bold text-orange-600">
            {score.averageTime.toFixed(1)}s
          </p>
        </div>
      </div>

      {/* Answer review */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Vos réponses
        </h2>
        <div className="space-y-3">
          {answers.map((answer, index) => {
            const question = questions.find((q) => q.id === answer.questionId);
            if (!question) return null;

            return (
              <div
                key={index}
                className={`p-4 rounded-lg border flex justify-between items-center ${
                  answer.isCorrect
                    ? "border-green-200 bg-green-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                <div className="flex items-center">
                  {answer.isCorrect ? (
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 mr-3" />
                  )}
                  <div>
                    <p className="font-medium">{question.productName}</p>
                    <p className="text-sm text-gray-600">
                      {answer.answer ? answer.answer : "No answer"}
                      {!answer.isCorrect &&
                        ` (Correct: ${question.correctAnswer})`}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {answer.timeTaken.toFixed(1)}s
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Educational summary */}
      <div className="mb-8 p-5 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-700 mb-3">
          🌍 Pourquoi consommer local&nbsp;?
        </h2>
        <ul className="space-y-2 text-blue-800">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
            <span>
              🚛 Les aliments locaux parcourent moins de distance, réduisant
              ainsi les émissions de carbone liées au transport.
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
            <span>
              🥦 Les produits de saison sont plus frais, plus nutritifs et
              nécessitent généralement moins de conservateurs.
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
            <span>
              💰 Soutenir les agriculteurs locaux permet de dynamiser l’économie
              locale et de préserver les terres agricoles.
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-1.5 mr-2"></span>
            <span>
              🧑‍🌾 Les circuits courts, comme les marchés de producteurs,
              favorisent un lien direct avec ceux qui cultivent votre
              nourriture.
            </span>
          </li>
        </ul>
      </div>

      {/* Restart button */}
      <button
        onClick={onRestart}
        className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold flex items-center justify-center hover:bg-green-600 active:scale-95 transition-transform"
      >
        <RefreshCw className="w-5 h-5 mr-2" />
        Rejouer
      </button>
    </div>
  );
};

// Add missing import
const Check = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const X = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default ResultsScreen;
