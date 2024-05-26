import React from 'react'

export default function Chart_one({ text }) {
  return (
    <div className='skill' >
      <div className="outer">
        <div className="shadow"></div>
        <div className="inner">
          <div className='text' >
            {text}
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
    </div>
  )
}
