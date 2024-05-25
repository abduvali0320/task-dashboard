import React from 'react'
import Navbar from './Navbar'
import Chart_line from './Chart_line'
import Chart_circle from './Chart_circle'

export default function Main() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <header>
        <div className='d-flex gap_20' >
          <div className='line_chart bg_white ' >
            <Chart_line />
          </div>
          <div className='circle_chart bg_white '  >
            <Chart_circle />
          </div>
        </div>
      </header>
    </div>
  )
}
