import React from 'react';
import './App.css';
import Site_bar from './components/Site_bar';
import Main from './components/Main';
export default function App() {
  return (
    <div className='body' >
      <div>
        <Site_bar />
      </div>
      <div className='max_pad' >
        <Main />
      </div>
    </div>
  )
}
