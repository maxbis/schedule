import scheduleList from "../data.json"

function time2Num(stringTime) {
    var numTimeArray=stringTime.split(':');
    return (numTimeArray[0]*100+parseInt(numTimeArray[1]/0.6) ); // convert 10:30 to 1050
  }
  
  
  const ScheduleItem = ( {thisTime, klas} ) => {
  
    var line=0;
  
    console.log(thisTime,klas);
  
    var x = scheduleList.find(el => {return (
      time2Num(el.begintijd) <= time2Num(thisTime) &&
      time2Num(el.eindtijd) > time2Num(thisTime)) &&
      el.klas === klas
    });
  
    if ( x ) {
      line =  (time2Num(thisTime)-time2Num(x.begintijd))/25;
      console.log(line, x.vak);
  
      if ( line === 0 ) {
        return(
          <div style={{ background:x.bgcolor, color:x.colorr }} className="flex-row row2 line1">{x.vak} {x.lokaal}</div>
        )
      } else if ( line === 1) {
        return (
          <div style={{ background:x.bgcolor, color:x.color }} className="flex-row row2 line2">{x.docent}</div>
        )
      } else {
        return (
          <div style={{ background:x.bgcolor, color:x.color }} className="flex-row row2 line2"></div>
        )
      } 
    } else {
      return(
        <div className="flex-row row2 line2"></div>
      )
    }
  }
 
 export default  ScheduleItem;