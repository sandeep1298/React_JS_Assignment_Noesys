import ReactEChart from "echarts-for-react";
import React, {useState} from 'react'
import { Resizable  } from 're-resizable';

export default function SunBurst() {
 const [width, setWidth] = useState(320)
 const [height, setHeight] = useState(300)

 var data = [
    {
      name: 'Grandpa',
      children: [
        {
          name: 'Uncle Leo',
          value: 15,
          children: [
            {
              name: 'Cousin Jack',
              value: 2
            },
            {
              name: 'Cousin Mary',
              value: 5,
              children: [
                {
                  name: 'Jackson',
                  value: 2
                }
              ]
            },
            {
              name: 'Cousin Ben',
              value: 4
            }
          ]
        },
        {
          name: 'Father',
          value: 10,
          children: [
            {
              name: 'Me',
              value: 5
            },
            {
              name: 'Brother Peter',
              value: 1
            }
          ]
        }
      ]
    },
    {
      name: 'Nancy',
      children: [
        {
          name: 'Uncle Nike',
          children: [
            {
              name: 'Cousin Betty',
              value: 1
            },
            {
              name: 'Cousin Jenny',
              value: 2
            }
          ]
        }
      ]
    }
  ];

    const eChartsOption = {
        title: {
          text: "Sun Burst"
        },
        series: {
            type: 'sunburst',
            data: data,
            radius: [60, '90%'],
            itemStyle: {
              borderRadius: 7,
              borderWidth: 2
            },
            label: {
              show: false
            }
          }
      };

    
  return (

        <>
            <Resizable   
            className="card"
            size={{ width, height }}
            onResizeStop={(e, direction, ref, d) => {
                setWidth(width + d.width);
                setHeight(height + d.height);
            }}

            onResize = {(e) =>{
                e.preventDefault()
                setHeight(300)
                setWidth(300)
                }}>

                <div className="card-body">
                    <ReactEChart option={eChartsOption}/>
                </div>
            </Resizable>   
        </>
  )
}

 