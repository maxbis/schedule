import './App.css'
import * as myConst from "./constants.js"
import ScheduleItem from "./components/ScheduleItem.js"



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
  return (

    <div className="App">
      <div className="table-container">
        <TimeTable />
      </div>
    </div>

  );
}


export default App;
