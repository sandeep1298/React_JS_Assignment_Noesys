import ReactEChart from "echarts-for-react";
import React, {useState} from 'react'
import { Resizable  } from 're-resizable';

export default function ScatterChart() {
 const [width, setWidth] = useState(320)
 const [height, setHeight] = useState(300)

    const eChartsOption = {
        title: {
          text: "Scatter Chart"
        },
        xAxis: {},
  yAxis: {},
  series: [
    {
      symbolSize: 20,
      data: [
        [10.0, 8.04],
        [8.07, 6.95],
        [13.0, 7.58],
        [9.05, 8.81],
        [11.0, 8.33],
        [14.0, 7.66],
        [13.4, 6.81],
        [10.0, 6.33],
        [14.0, 8.96],
        [12.5, 6.82],
        [9.15, 7.2],
        [11.5, 7.2],
        [3.03, 4.23],
        [12.2, 7.83],
        [2.02, 4.47],
        [1.05, 3.33],
        [4.05, 4.96],
        [6.03, 7.24],
        [12.0, 6.26],
        [12.0, 8.84],
        [7.08, 5.82],
        [5.02, 5.68]
      ],
      type: 'scatter'
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

 