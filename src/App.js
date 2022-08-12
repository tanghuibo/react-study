import './App.css';
import React from 'react';
import CloneElementTestView from './view/CloneElementTestView';
import MultipleSelectView from './view/MultipleSelectView';
import HighlightWordView from './view/HighlightWordView';
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <div className='View'>
        <span className='Title'>clone element test:</span>
        <CloneElementTestView />
      </div>

      <div className='View'>
        <span className='Title'>multiple select test:</span>
        <MultipleSelectView />
      </div>

      <div className='View'>
        <span className='Title'>highlight word test:</span>
        <HighlightWordView />
      </div>
      
    </div>
  );
}

export default App;
