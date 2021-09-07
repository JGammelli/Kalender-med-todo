import React from "react";
import Calendar from "./calendar";


class App extends React.Component {
 


render(){

  if(window.localStorage.length === 0){
    localStorage["todos"] = JSON.stringify([]);

  }

  return (
      <div>
        <h1>Calendar</h1>
        <Calendar/>
      </div>
    );
  }
}

export default App;
