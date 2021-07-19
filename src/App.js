import React, { useState } from 'react';
import './App.css';
import * as myConst from "./constants.js";
import ScheduleItem from "./components/ScheduleItem.js";
import KlasSelector from "./components/KlasSelector.js";
// import Selector from "./components/Selector.js"



const TimeTable = () => {
  return(
    <div>
      {myConst.ScheduleTimes.map(item => 
        <div className="flex-table row">
          <div className="flex-row row1 acc">{item.time}</div>
            <ScheduleItem thisTime={item.time} klas="1C"></ScheduleItem>
        </div>
      )} 
    </div>
  );
}


function App() {
  const [myKlas, setMyKlas] = useState("1A");
  return (
    <div className="App">
      <div className="table-container">
        <div className="flex-table">
          <div class="flex-row head1">maandag 20 aug</div>
          <div class="flex-row head2"><KlasSelector /></div>
        </div>

        <br />
        <TimeTable />
      </div>
    </div>

  );
}


export default App;
