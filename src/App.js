import React, { useState } from 'react';
import './App.css';
import * as myConst from "./constants.js";
import ScheduleItem from "./components/ScheduleItem.js";
import SelectKlas from "./components/SelectKlas.js";


const TimeTable = ( {myKlas, thisDay} ) => {
  console.log('TimeTable',myKlas, thisDay);
  return(
    <div>
      {myConst.ScheduleTimes.map(item => 
        <div className="flex-table row">
          <div className="flex-row row1 acc">{item.time}</div>
            <ScheduleItem thisTime={item.time} klas={myKlas} thisDay={thisDay}></ScheduleItem>
        </div>
      )} 
    </div>
  );
}


const ShowDagNummers = () => {
  return ([1,2,3,4,5]);
  switch ( new Date() ) {
    case (2):
      return ( [2,3,4,5] );
    case (3):
      return ( [3,4,5] );
    case (4):
      return ( [4,5] );
    case (5):
      return ( [5,1,2] );
    default:
      return ( [1,2,3,4,5] ) // ma, di, wo ,do, vr
  }
}


const ShowWeek = ( {myKlas} ) => {

  // let [ myKlas, setMyKlas ] = useState("1A");

  let today = myConst.weekdag[new Date().getDay()];
  // var utc = new Date().toJSON().slice(0,10);

  return (
    <table><tr>
      { ShowDagNummers().map(item =>
        <td>
          
          <div className="flex-table">
            <div class="flex-row head0">{myConst.weekdag[item]} ({myKlas})</div>
          </div>

          <div className="table-container">
            <TimeTable myKlas={myKlas} thisDay={item} />
          </div>
        </td>
      )}
      </tr></table>
  );

}


function App() {

  let [ myKlas, setMyKlas ] = useState("1A");
  // let today = myConst.weekdag[new Date().getDay()];
  // var utc = new Date().toJSON().slice(0,10);

  return (
    <div className="App">

        <div className="table-container">

          <div className="flex-table">
            <div class="flex-row">
              <SelectKlas query={myKlas} onQueryChange={myQuery => setMyKlas(myQuery)}
              />
            </div>
            <div class="flex-row head1"></div>
          </div>

          <ShowWeek myKlas={myKlas} />
        </div>   

    </div>

  );
}



export default App;
