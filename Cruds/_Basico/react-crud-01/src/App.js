import './App.css';
import React from 'react';
import Create from './component/Create';
import Read from './component/read';

function App() {
  return (
    <div className="main">
      <h2 className='main-header'>React Crud Operations</h2>
      <div>
            <Create/>
        <div className='read'>
            <Read/>
          </div>
      </div>
    </div>
  );
}

export default App;
