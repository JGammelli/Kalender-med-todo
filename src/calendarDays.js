import React from "react";

class CalendarDays extends React.Component {
    render(){
        let days = Array.from({length:this.props.days},(_, index) => index + 1);
        let retriveTodo = JSON.parse(localStorage["todos"]);

        let daysInMonth = days.map((day) => {
            let todoList = [];
            let listFull = 0;
            for(let todo in retriveTodo){
                if((this.props.year + "-" + this.props.month + "-" + day) === retriveTodo[todo].deadline){
                    if(todoList.length === 3){
                        listFull++
                    }else{
                        todoList.push(retriveTodo[todo].todo);
                    }
                }
            }

            return(
            <div onClick={this.props.handleclick} key={this.props.year + "-" + this.props.month + "-" + day} className="day" id={this.props.year + "-" + this.props.month + "-" + day}>
                {day}
                <ul>
                    {todoList.map((todo, index) =>{
                        return(<li key={index} className="todoList">{todo}</li>)
                    })}
                </ul>
                <ul>
                    {listFull !== 0 ? <p> +{listFull} deadlines</p> : null}
                </ul>
            </div>)
        });

        return(

            daysInMonth

            
        )
    }
}

export default CalendarDays;
