import React, { useState } from 'react';
import { Leaf, Timer, Tag, Trophy, Info, Play } from 'lucide-react';
import { Category, Difficulty, GameSettings } from '../types/game';

interface WelcomeScreenProps {
  onStart: (settings: GameSettings) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [settings, setSettings] = useState<GameSettings>({
    difficulty: 'all',
    categories: ['origine', 'saisonnalité', 'distribution'],
    questionsCount: 5,
    timePerQuestion: 15
  });

  const handleCategoryToggle = (category: Category) => {
    if (settings.categories.includes(category)) {
      if (settings.categories.length > 1) {
        setSettings({
          ...settings,
          categories: settings.categories.filter(c => c !== category)
        });
      }
    } else {
      setSettings({
        ...settings,
        categories: [...settings.categories, category]
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-500 mb-2">Local Battle</h1>
        <p className="text-gray-600">Teste tes connaissances sur les produits alimentaires locaux !</p>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-2">
          <Info className="w-5 h-5 text-green-500 mr-2" />
          <h2 className="text-xl font-semibold">Comment jouer ?</h2>
        </div>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Réponds à des questions sur les produits locaux vs importés</li>
          <li>Découvre la saisonnalité et les circuits de distribution</li>
          <li>Gagne des points pour chaque bonne réponse et réponse rapide</li>
          <li>Crée des séries de bonnes réponses pour obtenir des bonus</li>
        </ul>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <div className="flex items-center mb-2">
            <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
            <h2 className="text-xl font-semibold">Paramètres du jeu</h2>
          </div>

          <div className="space-y-4 mt-3">
            <div>
              <label className="block text-gray-700 mb-2">Difficulté</label>
              <div className="flex space-x-2">
                {(['facile', 'moyen', 'difficile', 'all'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setSettings({ ...settings, difficulty: level })}
                    className={`px-4 py-2 rounded-full ${
                      settings.difficulty === level
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {{
                      facile: 'Facile',
                      moyen: 'Moyen',
                      difficile: 'Difficile',
                      all: 'Toutes'
                    }[level]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Catégories</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryToggle('origine')}
                  className={`flex items-center px-4 py-2 rounded-full ${
                    settings.categories.includes('origine')
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Leaf className="w-4 h-4 mr-2" />
                  Origine
                </button>
                <button
                  onClick={() => handleCategoryToggle('saisonnalité')}
                  className={`flex items-center px-4 py-2 rounded-full ${
                    settings.categories.includes('saisonnalité')
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Timer className="w-4 h-4 mr-2" />
                  Saisonnalité
                </button>
                <button
                  onClick={() => handleCategoryToggle('distribution')}
                  className={`flex items-center px-4 py-2 rounded-full ${
                    settings.categories.includes('distribution')
                      ? 'bg-purple-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Tag className="w-4 h-4 mr-2" />
                  Distribution
                </button>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Nombre de questions</label>
              <input
                type="range"
                min="3"
                max="10"
                value={settings.questionsCount}
                onChange={(e) => setSettings({ ...settings, questionsCount: parseInt(e.target.value) })}
                className="w-full accent-green-500"
              />
              <div className="flex justify-between text-gray-600 text-sm">
                <span>3</span>
                <span>{settings.questionsCount}</span>
                <span>10</span>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Temps par question (secondes)</label>
              <input
                type="range"
                min="10"
                max="30"
                value={settings.timePerQuestion}
                onChange={(e) => setSettings({ ...settings, timePerQuestion: parseInt(e.target.value) })}
                className="w-full accent-green-500"
              />
              <div className="flex justify-between text-gray-600 text-sm">
                <span>10s</span>
                <span>{settings.timePerQuestion}s</span>
                <span>30s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => onStart(settings)}
        className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold flex items-center justify-center transition-transform hover:bg-green-600 active:scale-95"
      >
        <Play className="w-5 h-5 mr-2" />
        Démarrer le jeu
      </button>
    </div>
  );
};

export default WelcomeScreen;
