import ReactEChart from "echarts-for-react";
import React, {useState} from 'react'
import { Resizable  } from 're-resizable';

export default function Gauge() {
 const [width, setWidth] = useState(320)
 const [height, setHeight] = useState(300)

    const eChartsOption = {
        title: {
          text: "Gauge"
        },
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
          },
          series: [
            {
              name: 'Pressure',
              type: 'gauge',
              progress: {
                show: true
              },
              detail: {
                valueAnimation: true,
                formatter: '{value}',
                fontSize: 25,
              },
              data: [
                {
                  value: 75,
                  name: 'SCORE',
                }
              ]
            }
          ]
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

 