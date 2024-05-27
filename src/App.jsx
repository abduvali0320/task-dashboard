import React, { useState } from 'react';
import './App.css';
import Site_bar from './components/Site_bar';
import Main from './components/Main';
export default function App() {
  const [siteBar, setSiteBar] = useState(true)
  return (
    <div className='body' >
      <div>
        <Site_bar siteBar={siteBar} setSiteBar={setSiteBar} />
      </div>
      <div className='max_pad' >
        <Main setSiteBar={setSiteBar} />
      </div>
    </div>
  )
}
