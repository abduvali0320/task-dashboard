import { memo } from 'react';
import ReactApexChart from 'react-apexcharts'
function Chart_line() {
  const state = {
    series: [{
      data: [
        {
          x: 'Jan',
          y: 14000
        },
        {
          x: 'Feb',
          y: 11000
        },
        {
          x: 'Mar',
          y: 15000
        },
        {
          x: 'Apr',
          y: 11000
        },
        {
          x: 'May',
          y: 13000
        },
        {
          x: 'Jun',
          y: 11000
        },
        {
          x: 'Jul',
          y: 10000
        },
        {
          x: 'Aug',
          y: 13000
        },
        {
          x: 'Sep',
          y: 13500
        },
        {
          x: 'Oct',
          y: 11000
        },
        {
          x: 'Nov',
          y: 13000
        },
        {
          x: 'Dec',
          y: 15000
        },
      ],
    }],
    options: {
      chart: {
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      colors: ['#563bff'],
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: '#000',
        opacity: 0.35
      }
    },
  };
  return (
    <div className='bg_white' >
      <div id="chart">
        <ReactApexChart className='chart' options={state.options} series={state.series} type="line" height={'170%'} />
      </div>
      <div id="html-dist"></div>
    </div >
  );
}
export default memo(Chart_line)