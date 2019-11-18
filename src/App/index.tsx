import React from 'react';
import './App.css';

const App: React.FC = () => {
  console.log('process.env.NAME', process.env.NAME);
  return <div>Hi {process.env.NAME}!</div>;
};

export default App;
