import React from 'react'
import Navbar from './Navbar'
import Chart_line from './Chart_line'
import Chart_circle from './Chart_circle'
import { TbCalendarHeart, TbUsers } from 'react-icons/tb'
import { MdShowChart } from 'react-icons/md'
import { RxCountdownTimer } from 'react-icons/rx'
import Chart_one from './Chart_one'

export default function Main() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <header>
        <div className='d-flex gap_20' >
          <div className='line_chart' >
            <div className='flex_element' >
              <h1>Performance</h1>
              <p>Year</p>
            </div>
            <Chart_line />
          </div>
          <div className='circle_chart'>
            <div className='flex_element shadow_text' >
              <h1>Sessions By Device</h1>
              <p>Year</p>
            </div>
            <Chart_circle />
          </div>
        </div>
        <div className='d-flex gap_20  mt-20 ' >
          <div className="left_box">

            <div className="boxer">
              <div className="box">
                <div className="icon">
                  <TbUsers />
                </div>
                <div className='box_amount' >
                  <span>Users</span>
                  <h2>72.6k</h2>
                  <span>+25%</span>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <TbCalendarHeart />
                </div>
                <div className='box_amount' >
                  <span>Sessions</span>
                  <h2>87.2k</h2>
                  <span>+47%</span>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <MdShowChart />
                </div>
                <div className='box_amount' >
                  <span>Bounce Rate</span>
                  <h2>26.3%</h2>
                  <span>-28%</span>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <RxCountdownTimer />
                </div>
                <div className='box_amount' >
                  <span>Session Duration</span>
                  <h2>2m 18sk</h2>
                  <span>+13%</span>
                </div>
              </div>
            </div>
            <div className="flex_element  export_box">
              <h1>Daily Overview</h1>
              <button className='export' >export</button>
            </div>

            <div className='flex_element progress_circle'>
              <div className='flex_element' >
                <div>
                  <h1>5,461 </h1>
                  <p>Today</p>
                </div>
                <Chart_one text='Users' />
                <div className='text_end' >
                  <h1>8,085 </h1>
                  <p>Expected</p>
                </div>
              </div>
              <div className='flex_element' >
                <div>
                  <h1>140 </h1>
                  <p>Today</p>
                </div>
                <Chart_one text='Goals' />
                <div className='text_end' >
                  <h1>120 </h1>
                  <p >Expected</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right_box">
            <div className="bg_white">
              <h1>Sessions By Device</h1>
              <div className="flex_element">
                <div className='d-flex gap_20'  >
                  <span>Channel</span>
                  <span>Traffic (%)</span>
                </div>
                <div>
                  Value
                </div>
              </div>
              <hr />
              <div className='progress_line' >
                <div className="flex_element">
                  <p>Direct</p>
                  <div className="outline_cover">
                    <div className="line" title='60%' ></div>
                  </div>
                  <p>23.28%</p>
                </div>
                <div className="flex_element">
                  <p>Direct</p>
                  <div className="outline_cover">
                    <div className="line" title='70%'></div>
                  </div>
                  <p>23.28%</p>
                </div>
                <div className="flex_element">
                  <p>Direct</p>
                  <div className="outline_cover">
                    <div className="line" title='40%'></div>
                  </div>
                  <p>23.28%</p>
                </div>
              </div>
            </div>
            <div className="by_device">
              <div className="flex_element">
                <div>
                  <h1>Sessions By Device</h1>
                  <p>Top Region & session</p>
                </div>
                <button>view</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}
