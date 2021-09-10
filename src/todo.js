import moment from "moment";
import React from "react";

class TodoForm extends React.Component {
    
    render(){
        let retrive = JSON.parse(localStorage["todos"]);
        
        retrive.sort(function compare(a, b){
            let deadlineA = new moment(a.deadline);
            let deadlineB = new moment(b.deadline);
            return deadlineA - deadlineB; 
        });

        return(  
            <div className="todoList">
                {retrive.map((data, key) =>{
                    
                    return(
                        <div className="todoContainer" key={key}>
                            <p>{"todo: " + data.todo}</p>
                            <p>{"deadline: " + data.deadline}</p>
                            <button onClick={this.props.completeTodo} id={data.todo+"-"+data.deadline}>Completed</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default TodoForm;