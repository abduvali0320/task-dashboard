import React, { memo } from 'react'
import ReactApexChart from 'react-apexcharts';
function Chart_circle() {
  const state = {
    series: [75, 55, 25],
    options: {
      chart: {
        type: 'radialBar',
      },
      colors: ['#563BFF', '#FF7049', '#20C997'],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                return ((75 + 55 + 25) / 3).toFixed(2) + '%'
              }
            }
          }
        }
      },
      labels: ['Desktop', 'Mobile', 'Tables'],
    },
  };
  return (
    <div className='bg_white d-flex align_center ' >
      <div>
        <div id="chart">
          <ReactApexChart options={state.options} series={state.series} type="radialBar" />
        </div>
        <div id="html-dist"></div>
      </div>
      <ul className='description_chart_circle' >
        <li>
          <span>Desktop</span> <br /> 8,085 <span>13%</span>
        </li>
        <li>
          <span>Mobile</span>  <br /> 8,085 <span>30%</span>
        </li>
        <li>
          <span>Tables</span> <br /> 8,085 <span>25%</span>
        </li>
      </ul>
    </div>
  );
}

export default memo(Chart_circle)