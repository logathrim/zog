import React, { useState } from 'react';
import Header from './components/Header';
import TableReservation from './components/TableReservation';
import MusicLineup from './components/MusicLineup';
import Promotions from './components/Promotions';
import RestaurantSelection from './components/RestaurantSelection';
import { Restaurant } from './types';

function App() {
  const [activeTab, setActiveTab] = useState('reservation');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleBackToSelection = () => {
    setSelectedRestaurant(null);
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'reservation':
        return <TableReservation restaurant={selectedRestaurant} onBackToSelection={handleBackToSelection} />;
      case 'lineup':
        return <MusicLineup restaurant={selectedRestaurant} onBackToSelection={handleBackToSelection} />;
      case 'promotions':
        return <Promotions restaurant={selectedRestaurant} onBackToSelection={handleBackToSelection} />;
      default:
        return <TableReservation restaurant={selectedRestaurant} onBackToSelection={handleBackToSelection} />;
    }
  };

  // Show restaurant selection if no restaurant is selected
  if (!selectedRestaurant) {
    return <RestaurantSelection onRestaurantSelect={handleRestaurantSelect} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 pb-20">
      <main className="min-h-screen">
        {renderActiveComponent()}
      </main>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}

export default App;