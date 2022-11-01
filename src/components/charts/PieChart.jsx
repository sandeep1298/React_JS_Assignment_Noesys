import ReactEChart from "echarts-for-react";
import React, {useState} from 'react'
import { Resizable  } from 're-resizable';

export default function PieChart() {
 const [width, setWidth] = useState(320)
 const [height, setHeight] = useState(300)

    const eChartsOption = {
        title: {
            text: "Pie Chart"
          },
        tooltip: {
            trigger: 'item'
          },
          
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
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

 