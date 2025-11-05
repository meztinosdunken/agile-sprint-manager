import React from 'react';
import KanbanBoard from './components/KanbanBoard';

const App = () => {
  return (
    <div className="app">
      <h1>Agile Sprint Manager</h1>
      <KanbanBoard />
    </div>
  );
};

export default App;