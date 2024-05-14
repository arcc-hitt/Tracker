import React from 'react'

const yAxisLabels = ['100%', '80%', '60%', '40%', '20%'];
const xAxisLabels = ['28/4', '30/4', '02/5', '05/5', '11/5', '15/5', '22/5'];
const barValues = [92, 100, 98, 90, 84, 82, 80];

/*
Graph Y axis -
width: Hug (24px)px;
height: Hug (163px)px;
padding: 0px 0px 24px 0px;
gap: 16px;

Text on the Y axis -
width: 24px;
height: 15px;
font-family: Poppins;
font-size: 10px;
font-weight: 400;
line-height: 15px;
text-align: left;
background: #B5B5B5;
content-100%, 80%, 60%, 40%, 20%

div for bars container and x axis -
width: Fixed (250px)px;
height: Hug (169px)px;
gap: 12px;

Graph X axis -
width: Fill (250px)px;
height: Hug (7px)px;
gap: 0px;
justify: space-between;

Text on the X axis -
width: 21px;
height: 7px;
font-family: DM Sans;
font-size: 10px;
font-weight: 400;
line-height: 13.02px;
text-align: center;
background: #B5B5B5;
content - 28/4, 30/4, 02/5, 05/5, 11/5, 15/5, 15/5, 22/5

Bars container -
width: Fill (250px)px;
height: Hug (150px)px;
padding: 0px 4px 0px 4px;
gap: 0px;
justify: space-between;
opacity: 0px;

Bar -
width: 14px;
height: 135px;
gap: 0px;
border-radius: 2px 0px 0px 0px;
background: #5A92CB;

Text for value of the bar -
width: 14px;
height: 6px;
font-family: DM Sans;
font-size: 8px;
font-weight: 500;
line-height: 10.42px;
text-align: center;
background: #EBE9E8;
content - 92, 100, 98, 90, 84, 82, 80, 80
*/
const Graph = () => {
  return (
    <div className='w-[312px] h-[213px] rounded-[12px] px-2 py-3 bg-[#282828]'>
        <div className='w-auto min-w-[284px] h-auto min-h-[169px] gap-[10px] flex'>
        <div className='flex flex-col items-end justify-between w-auto min-w-[24px] h-auto min-h-[163px] pb-6'>
          {yAxisLabels.map((label, index) => (
            <span key={index} className='text-[10px] leading-[15px] text-[#B5B5B5]'>
              {label}
            </span>
          ))}
        </div>
        <div className='flex flex-col w-[250px] h-auto min-h-[169px]'>
          <div className='flex justify-between items-end min-w-[250px] h-auto min-h-[150px] mb-1 px-1'>
            {barValues.map((value, index) => (
              <div key={index} className='flex flex-col items-center'>
                <span className='text-[8px] font-medium leading-[10.42px] text-[#EBE9E8]'>
                  {value}
                </span>
                <div
                  className='w-[14px] bg-[#5A92CB] rounded-sm'
                  style={{ height: `${(value / 100) * 135}px` }}
                ></div>
              </div>
            ))}
          </div>
          <div className='flex justify-between min-w-[250px] h-auto min-h-[7px]'>
            {xAxisLabels.map((label, index) => (
              <span key={index} className='w-[21px] text-[10px] leading-[13.02px] text-center text-[#B5B5B5]'>
                {label}
              </span>
            ))}
          </div>
        </div>
        </div>
    </div>
  )
}

export default Graph
