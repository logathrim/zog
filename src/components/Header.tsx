import React from 'react';
import { Music, Calendar, Gift } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const tabs = [
    { id: 'reservation', label: 'จองโต๊ะ', icon: Calendar },
    { id: 'lineup', label: 'ดนตรีสด', icon: Music },
    { id: 'promotions', label: 'โปรโมชัน', icon: Gift }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 backdrop-blur-md border-t border-purple-700/30 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center space-y-1 px-4 py-2 rounded-lg transition-all duration-200 min-w-0 flex-1 ${
                  activeTab === tab.id
                    ? 'text-amber-400 transform scale-105'
                    : 'text-purple-200 hover:text-white'
                }`}
              >
                <IconComponent className={`h-6 w-6 ${activeTab === tab.id ? 'drop-shadow-lg' : ''}`} />
                <span className="text-xs font-medium truncate">{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="w-1 h-1 bg-amber-400 rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}