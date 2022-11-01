import ReactEChart from "echarts-for-react";
import React, {useState} from 'react'
import { Resizable  } from 're-resizable';

export default function Parallel() {
 const [width, setWidth] = useState(320)
 const [height, setHeight] = useState(300)

    const eChartsOption = {
        title: {
          text: "Parallel"
        },
        parallelAxis: [
            { dim: 0, name: 'Price' },
            { dim: 1, name: 'Net Weight' },
            { dim: 2, name: 'Amount' },
            {
              dim: 3,
              name: 'Score',
              type: 'category',
              data: ['Excellent', 'Good', 'OK', 'Bad']
            }
          ],
          series: {
            type: 'parallel',
            lineStyle: {
              width: 4
            },
            data: [
              [12.99, 100, 82, 'Good'],
              [9.99, 80, 77, 'OK'],
              [20, 120, 60, 'Excellent']
            ]
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

 