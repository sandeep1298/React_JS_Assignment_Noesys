import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import React, {useState} from "react";
import './App.css';
import BarChart from "./components/charts/BarChart";
import LineChart from "./components/charts/LineChart";
import PieChart from "./components/charts/PieChart";
import ScatterChart from "./components/charts/ScatterChart";
import CandleStick from "./components/charts/CandleStick";
import Radar from "./components/charts/Radar";
import GraphChart from "./components/charts/GraphChart";
import SunBurst from "./components/charts/SunBurst";
import Parallel from "./components/charts/Parallel";
import Funnel from "./components/charts/Funnel";
import Gauge from "./components/charts/Gauge";
import CustomChart from "./components/charts/CustomChart";


function App() {
 
  const [items, setItems] = useState([
    {
      id:"123",
      content:<LineChart/>
    },
    {
      id:"345",
      content:<BarChart/>
    },
    {
      id:"567",
      content:<PieChart/>
    },
    {
      id:"789",
      content:<ScatterChart/>
    },
    {
      id:"91011",
      content:<CandleStick/>
    },
    {
      id:"111213",
      content:<Radar/>
    },
    {
      id:"131415",
      content:<GraphChart/>
    },
    {
      id:"151617",
      content:<SunBurst/>
    },
    {
      id:"171819",
      content:<Parallel/>
    },
    {
      id:"192021",
      content:<Funnel/>
    },
    {
      id:"212223",
      content:<Gauge/>
    },
    {
      id:"232425",
      content:<CustomChart/>
    },
  ])

  const onDragEnd = (result) =>{
    if(!result.destination){
      return;
    }
	const schemaCopy = items.slice();
	const [removed] = schemaCopy.splice(result.source.index, 1);

		schemaCopy.splice(result.destination.index, 0, removed);
		//console.log(result);
		setItems(schemaCopy);
  }
 
  return (
  
      <div className="App container-fluid pt-5 ">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="column1">
            {(provided, snap)=>(
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <div className="row">
                {
                  items.map((it,i)=>(
                    <Draggable 
                    key={it.id}
                    draggableId={it.id}
                    index={i}
                    >
                      {(provided, snap)=>(
                        <div
                        ref={provided.innerRef}
			{...provided.draggableProps}
			{...provided.dragHandleProps}
                        >
                          <div className="col-lg-4 ml-3 pb-5">
                          {it.content}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))
                } 
             </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext> 
      </div>
  );
}

export default App;
