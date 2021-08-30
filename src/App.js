import React, { useEffect, useState } from "react";
import Calendar from "./calendar";


class App extends React.Component {

  // let [todo, SetTodo] = useState("");
  // let [deadline, SetDeadline] = useState("");

  // useEffect(()=>{

  // })
render(){
  return (
      <div>
        <h1>Calendar</h1>
        <Calendar/>
      </div>
    );
  }
}

export default App;
