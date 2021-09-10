import React from "react";

class CalendarDays extends React.Component {

    state={
        holidays: []
    } 

    async componentDidUpdate(){
        const response = await fetch(`https://sholiday.faboul.se/dagar/v2.1/${this.props.year + "/" + this.props.month}`);
        const data = await response.json();
        this.setState({holidays: data.dagar})
    }

    render(){
        let days = Array.from({length:this.props.days},(_, index) => index + 1);
        let retriveTodo = JSON.parse(localStorage["todos"]);

        let daysInMonth = days.map((day) => {
            let todoList = [];
            let listFull = 0;
            for(let todo in retriveTodo){
                if((this.props.year + "-" + this.props.month + "-" + day) === retriveTodo[todo].deadline){
                    if(todoList.length === 2){
                        listFull++
                    }else{
                        todoList.push(retriveTodo[todo].todo);
                    }
                }
            }      
            
            let getHolidays = this.state.holidays;
            let todaysHoliday = [];
            for(let holiday in getHolidays){
                if((this.props.year + "-" + this.props.month + "-" + day) === getHolidays[holiday].datum){
                    todaysHoliday.push(getHolidays[holiday].helgdag)
                }
            }
            
            return(
            <div onClick={this.props.handleclick} key={this.props.year + "-" + this.props.month + "-" + day} className="day" id={this.props.year + "-" + this.props.month + "-" + day}>
                {day}
                {todaysHoliday.map((helgdag, index) => {
                    return <p key={index}>{helgdag}</p>
                    })}
                <ul >
                    {todoList.map((todo, index) =>{
                        return(<li key={index} className="todoList" id={this.props.year + "-" + this.props.month + "-" + day}>{todo}</li>)
                    })}
                </ul>
                <ul>
                    {listFull !== 0 ? <p id={this.props.year + "-" + this.props.month + "-" + day}> +{listFull} todos</p> : null}
                </ul>
            </div>)
        });

        return(
            daysInMonth
        )
    }
}

export default CalendarDays;
