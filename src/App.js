import React from "react";
import Calendar from "./calendar";



class App extends React.Component {
  render(){

    if(window.localStorage.length === 0){
      localStorage["todos"] = JSON.stringify([]);
    }   


    return (
      <Calendar/>
    );
  }
}

export default App;
