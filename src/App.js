import React from 'react';
import CardList from './CardList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>No Longer Human<-Dazai/h1>
      <p>To add your details, please submit a PR with your information in the <code>developers.json</code> file.</p>
      <CardList />
    </div>
  );
}

export default App;
