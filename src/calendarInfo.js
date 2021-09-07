import React from "react";
import CalendarDays from "./calendarDays";
import BlankDays from "./blankDays";
import WeekDays from "./weekDays";
import AddTodo from "./addTodo";

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
        //event.preventDefault();

        //add to json, date and todo thing

        

        let array = this.state.array;
        let newTodo = {todo: this.state.text, deadline: this.state.deadline};
        array.push(newTodo);

        localStorage["todos"] = JSON.stringify(array);
        
        // console.log(array);
    }

    render(){
        
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
                    </>}
                    handleClose={this.togglePopup}
                />}


                <h1>{this.props.year}</h1>
                <h3>{this.props.month}</h3>
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




