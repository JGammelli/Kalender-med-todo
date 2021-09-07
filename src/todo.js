import React from "react";

class TodoForm extends React.Component {
    
    render(){
        let retrive = JSON.parse(localStorage["todos"]);
        //Gör ny lista och stoppa in dom i datum ordning!
        return(  
            <div id="todoList">
                {retrive.map((data, key) =>{
                    return(
                        <div className="todoContainer" key={key}>
                            <p>{"todo: " + data.todo}</p>
                            <p>{"deadline: " + data.deadline}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TodoForm;