import React from 'react';
import Adding from './Adding';
import './App.css';

function App() {
  return (
    <div className='line'>
      <Adding minNumber={1} maxNumber={20} repeats={42}/>
    </div>
  );
}

export default App;
