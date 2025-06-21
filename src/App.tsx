import React, { useState } from 'react';
import Header from './components/Header';
import TableReservation from './components/TableReservation';
import MusicLineup from './components/MusicLineup';
import Promotions from './components/Promotions';

function App() {
  const [activeTab, setActiveTab] = useState('reservation');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'reservation':
        return <TableReservation />;
      case 'lineup':
        return <MusicLineup />;
      case 'promotions':
        return <Promotions />;
      default:
        return <TableReservation />;
    }
  };

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