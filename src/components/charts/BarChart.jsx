import ReactEChart from "echarts-for-react";
import React, {useState} from 'react'
import { Resizable  } from 're-resizable';


export default function BarChart() {
  const [width, setWidth] = useState(320)
  const [height, setHeight] = useState(300)
 
    const eChartsOption = {
        title: {
          text: "Bar Chart",
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
        tooltip: {},
       
    
        series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
              }
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
        }}
        >
          <div className="card-body">
              <ReactEChart option={eChartsOption}/>
          </div>
        </Resizable>
    </>
  )
}

 