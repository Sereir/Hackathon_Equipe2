import React, { useState, useRef } from 'react';
import { Leaf, Timer, Tag, Trophy, Info, Play, MapPin, Calendar, Award, Zap } from 'lucide-react';
import { Category, Difficulty, GameSettings } from '../types/game';

interface WelcomeScreenProps {
  onStart: (settings: GameSettings) => void;
}

// Define the rule item type
interface RuleItem {
  icon: React.ReactNode;
  title: string;
  text: string;
  color: string;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [settings, setSettings] = useState<GameSettings>({
    difficulty: 'all',
    categories: ['origine', 'saisonnalité', 'distribution'],
    questionsCount: 5,
    timePerQuestion: 15
  });

  // Initial rules data
  const initialRules: RuleItem[] = [
    { 
      icon: <MapPin className="w-5 h-5" />, 
      title: "Origine", 
      text: "Réponds à des questions sur les produits locaux vs importés",
      color: "from-blue-500/10 to-blue-500/30"
    },
    { 
      icon: <Calendar className="w-5 h-5" />, 
      title: "Saisonnalité", 
      text: "Découvre la saisonnalité et les circuits de distribution",
      color: "from-orange-500/10 to-orange-500/30"
    },
    { 
      icon: <Award className="w-5 h-5" />, 
      title: "Points", 
      text: "Gagne des points pour chaque bonne réponse et réponse rapide",
      color: "from-green-500/10 to-green-500/30"
    },
    { 
      icon: <Zap className="w-5 h-5" />, 
      title: "Bonus", 
      text: "Crée des séries de bonnes réponses pour obtenir des bonus",
      color: "from-purple-500/10 to-purple-500/30"
    }
  ];

  // State to track the current order of rules
  const [rules, setRules] = useState<RuleItem[]>(initialRules);
  
  // Drag state references
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  // Handle drag start
  const handleDragStart = (index: number) => {
    dragItem.current = index;
  };

  // Handle drag enter
  const handleDragEnter = (index: number) => {
    dragOverItem.current = index;
  };

  // Handle drag end (reordering)
  const handleDragEnd = () => {
    if (dragItem.current !== null && dragOverItem.current !== null) {
      const newRules = [...rules];
      const draggedItem = newRules[dragItem.current];
      
      // Remove item from its position
      newRules.splice(dragItem.current, 1);
      
      // Add at new position
      newRules.splice(dragOverItem.current, 0, draggedItem);
      
      // Update state
      setRules(newRules);
    }
    
    // Reset references
    dragItem.current = null;
    dragOverItem.current = null;
  };

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
    <div className="max-w-4xl mx-auto p-6">
      {/* Main container with subtle backdrop blur */}
      <div className="relative backdrop-blur-sm bg-white/70 rounded-xl shadow-xl p-8 border border-white/40 overflow-hidden">
        {/* Background gradient for linear effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-blue-50/80 -z-10"></div>
        
        {/* Large light reflection */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
        
        {/* Header section with glassmorphism */}
        <div className="text-center mb-10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-300/10 to-blue-300/10 rounded-xl -z-5"></div>
          <div className="relative z-10 py-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent mb-3">
              <img src ="/src/images/EcoQuizz.png" alt="Logo" className="w-64 h-64 mx-auto mb-2" />
            </h1>
            <p className="text-gray-600 text-lg">
              Teste tes connaissances sur les produits alimentaires locaux !
            </p>
          </div>
        </div>

        {/* "Comment jouer" section - already styled */}
        <div className="mb-10 relative">
          {/* Background gradient for linear effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-2xl -z-10"></div>
          
          {/* Glassmorphism container */}
          <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-6 shadow-lg relative overflow-hidden">
            {/* Light reflection effect */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-xl"></div>
            
            <div className="flex items-center mb-4 border-b border-white/40 pb-3">
              <div className="bg-green-500 text-white p-2 rounded-full mr-3 shadow-md">
                <Info className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold text-green-800">Comment jouer ?</h2>
            </div>
            
            {/* Grid layout for interchangeable blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              {rules.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-xl bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/40 hover:shadow-md transition-all duration-300 cursor-grab active:cursor-grabbing group ${dragItem.current === index ? 'opacity-50' : ''}`}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragEnter={() => handleDragEnter(index)}
                  onDragEnd={handleDragEnd}
                  onDragOver={(e) => e.preventDefault()}
                >
                  <div className="flex items-center mb-2">
                    <div className="p-2 bg-white/60 rounded-lg shadow-sm mr-3 group-hover:bg-white group-hover:shadow-md transition-all">
                      {item.icon}
                    </div>
                    <h3 className="font-medium text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 ml-12">{item.text}</p>
                  <div className="mt-2 ml-12 flex items-center text-xs text-gray-500">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/70 mr-1">
                      {index + 1}
                    </div>
                    <span>Glisser pour réorganiser</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Game Settings section - new glassmorphism style */}
        <div className="mb-10 relative">
          {/* Background gradient for linear effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-300/20 rounded-2xl -z-10"></div>
          
          {/* Glassmorphism container */}
          <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl p-6 shadow-lg relative overflow-hidden">
            {/* Light reflection effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-100/30 rounded-full blur-xl"></div>
            
            <div className="flex items-center mb-6 border-b border-white/40 pb-3">
              <div className="bg-yellow-500 text-white p-2 rounded-full mr-3 shadow-md">
                <Trophy className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold text-amber-800">Paramètres du jeu</h2>
            </div>
            
            <div className="space-y-6 mt-3 relative z-10">
              {/* Difficulty buttons */}
              <div className="space-y-3">
                <label className="block text-gray-700 font-medium">Difficulté</label>
                <div className="flex flex-wrap gap-2">
                  {(['facile', 'moyen', 'difficile', 'all'] as const).map((level) => (
                    <button
                      key={level}
                      onClick={() => setSettings({ ...settings, difficulty: level })}
                      className={`px-5 py-2 rounded-full backdrop-blur-sm border border-white/40 transition-all ${
                        settings.difficulty === level
                          ? 'bg-gradient-to-r from-green-500 to-green-400 text-white shadow-md'
                          : 'bg-white/30 text-gray-700 hover:bg-white/50'
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

              {/* Categories selection */}
              <div className="space-y-3">
                <label className="block text-gray-700 font-medium">Catégories</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleCategoryToggle('origine')}
                    className={`flex items-center px-5 py-2 rounded-full backdrop-blur-sm border border-white/40 transition-all ${
                      settings.categories.includes('origine')
                        ? 'bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-md'
                        : 'bg-white/30 text-gray-700 hover:bg-white/50'
                    }`}
                  >
                    <Leaf className="w-4 h-4 mr-2" />
                    Origine
                  </button>
                  <button
                    onClick={() => handleCategoryToggle('saisonnalité')}
                    className={`flex items-center px-5 py-2 rounded-full backdrop-blur-sm border border-white/40 transition-all ${
                      settings.categories.includes('saisonnalité')
                        ? 'bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-md'
                        : 'bg-white/30 text-gray-700 hover:bg-white/50'
                    }`}
                  >
                    <Timer className="w-4 h-4 mr-2" />
                    Saisonnalité
                  </button>
                  <button
                    onClick={() => handleCategoryToggle('distribution')}
                    className={`flex items-center px-5 py-2 rounded-full backdrop-blur-sm border border-white/40 transition-all ${
                      settings.categories.includes('distribution')
                        ? 'bg-gradient-to-r from-purple-500 to-purple-400 text-white shadow-md'
                        : 'bg-white/30 text-gray-700 hover:bg-white/50'
                    }`}
                  >
                    <Tag className="w-4 h-4 mr-2" />
                    Distribution
                  </button>
                </div>
              </div>

              {/* Sliders with glassmorphism styling */}
              <div className="space-y-3">
                <label className="block text-gray-700 font-medium">Nombre de questions</label>
                <div className="bg-white/30 rounded-xl p-4 backdrop-blur-sm border border-white/40">
                  <input
                    type="range"
                    min="3"
                    max="10"
                    value={settings.questionsCount}
                    onChange={(e) => setSettings({ ...settings, questionsCount: parseInt(e.target.value) })}
                    className="w-full accent-green-500"
                  />
                  <div className="flex justify-between text-gray-600 text-sm mt-1 px-1">
                    <span>3</span>
                    <span className="font-medium text-green-600">{settings.questionsCount}</span>
                    <span>10</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-gray-700 font-medium">Temps par question (secondes)</label>
                <div className="bg-white/30 rounded-xl p-4 backdrop-blur-sm border border-white/40">
                  <input
                    type="range"
                    min="10"
                    max="30"
                    value={settings.timePerQuestion}
                    onChange={(e) => setSettings({ ...settings, timePerQuestion: parseInt(e.target.value) })}
                    className="w-full accent-green-500"
                  />
                  <div className="flex justify-between text-gray-600 text-sm mt-1 px-1">
                    <span>10s</span>
                    <span className="font-medium text-green-600">{settings.timePerQuestion}s</span>
                    <span>30s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start button with glassmorphism */}
        <div className="relative">
          <button
            onClick={() => onStart(settings)}
            className="w-full py-4 bg-gradient-to-r from-green-500 to-green-400 border border-green-400/50 text-white rounded-xl font-semibold text-lg flex items-center justify-center transition-all hover:shadow-lg hover:from-green-600 hover:to-green-500 active:scale-98 backdrop-blur-sm"
          >
            <Play className="w-6 h-6 mr-2" />
            Démarrer le jeu
          </button>
          <div className="absolute inset-0 bg-green-400/20 rounded-xl blur-md -z-10 transform translate-y-1"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
