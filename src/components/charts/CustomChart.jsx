import ReactEChart from "echarts-for-react";
import React, {useState} from 'react'
import { Resizable  } from 're-resizable';

export default function CustomChart() {
 const [width, setWidth] = useState(320)
 const [height, setHeight] = useState(300)

 const colorList = [
    '#4f81bd',
    '#c0504d',
    '#9bbb59',
    '#604a7b',
    '#948a54',
    '#e46c0b'
  ];
  const data = [
    [10, 16, 3, 'A'],
    [16, 18, 15, 'B'],
    [18, 26, 12, 'C'],
    [26, 32, 22, 'D'],
    [32, 56, 7, 'E'],
    [56, 62, 17, 'F']
  ].map(function (item, index) {
    return {
      value: item,
      itemStyle: {
        color: colorList[index]
      }
    };
  });

    const eChartsOption = {
        title: {
          text: "Custom Chart"
        },
        tooltip: {},
  xAxis: {
    scale: true
  },
  yAxis: {},
  series: [
    {
      type: 'custom',
      renderItem: function (params, api) {
        var yValue = api.value(2);
        var start = api.coord([api.value(0), yValue]);
        var size = api.size([api.value(1) - api.value(0), yValue]);
        var style = api.style();
        return {
          type: 'rect',
          shape: {
            x: start[0],
            y: start[1],
            width: size[0],
            height: size[1]
          },
          style: style
        };
      },
      label: {
        show: true,
        position: 'top'
      },
      dimensions: ['from', 'to', 'profit'],
      encode: {
        x: [0, 1],
        y: 2,
        tooltip: [0, 1, 2],
        itemName: 3
      },
      data: data
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

 