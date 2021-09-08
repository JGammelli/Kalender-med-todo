import React from "react";
import CalendarDays from "./calendarDays";
import BlankDays from "./blankDays";
import WeekDays from "./weekDays";
import AddTodo from "./addTodo";
import TodoForm from "./todo";

class CalendarInfo extends React.Component {
    
    state = {
        isOpen: false,
        text: "",
        deadline: "",
        array: JSON.parse(localStorage["todos"])
    }

    togglePopup = (event) =>{
        this.setState({isOpen: !this.state.isOpen})
        this.setState({text: ""})
        this.setState({deadline: event.target.id})
        console.log(event.target.id);
    }

    onChange = (event) =>{
        this.setState({text: event.target.value})
    }

    onSubmit = (event) =>{
        event.preventDefault();
        let array = this.state.array;
        let newTodo = {todo: this.state.text, deadline: this.state.deadline};
        array.push(newTodo);
        localStorage["todos"] = JSON.stringify(array);
        this.togglePopup(event);
    }

    completedTodo = (event) => {
        console.log("Completed todo!");
        let retriveTodo = JSON.parse(localStorage["todos"]);

        let unCompletedTodo = [];
        for(let todo in retriveTodo){
            if(event.target.id !== retriveTodo[todo].todo+"-"+retriveTodo[todo].deadline){
                unCompletedTodo.push({todo: retriveTodo[todo].todo, deadline: retriveTodo[todo].deadline})
            }
        }
        localStorage["todos"] = JSON.stringify(unCompletedTodo);
        this.setState({array: JSON.parse(localStorage["todos"])})
    }
    render(){
        let retriveTodo = JSON.parse(localStorage["todos"]);
        let todoList = [];

        for(let todo in retriveTodo){
            if(this.state.deadline === retriveTodo[todo].deadline){
                todoList.push(retriveTodo[todo].todo);
            }
        }
        return(
            <>
                {this.state.isOpen && <AddTodo
                    content={
                    <>
                        <form onSubmit={this.onSubmit}>
                            <label >Add a todo</label>
                            <input type="text" value={this.state.text} onChange={this.onChange}/>
                            <button>Add</button>
                        </form>
                        {todoList.length === 0 ? <p>There's no deadlines this day!</p> : <p>Deadlines for this day:</p>}
                        {todoList.map((todo, index) =>{
                            return (
                                <ul key={index}> 
                                    <li>
                                        {todo}
                                    </li>
                                    <button id={todo+"-"+this.state.deadline} onClick={this.completedTodo}>Complete</button>
                                </ul>
                            )
                        })}
                    </>}
                    handleClose={this.togglePopup}
                />}
                <TodoForm completeTodo={this.completedTodo} />
                <h1 className="yearBox">{this.props.year}</h1>
                <h3 className="monthBox">{this.props.month}</h3>
                <div className="weekDayContainer"><WeekDays/></div>
                <div className="dayContainer"> 
                    <BlankDays weekDay={this.props.weekDay}/>
                    <CalendarDays days={this.props.days} month={this.props.shortMonth} year={this.props.year} handleclick={this.togglePopup} todo={this.state.text}/>
                </div>
            </>
        )
    }
}

export default CalendarInfo;




