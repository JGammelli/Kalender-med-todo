import React from "react";
import CalendarInfo from "./calendarInfo";
import moment from "moment";
import TodoForm from "./todo";



class Calendar extends React.Component {

    state = {
        m: moment()
    }

    setNextMonth = () =>{
        this.setState({count: this.state.m.add(1, 'month')});
    };

    setPrevMonth = () =>{
        this.setState({count: this.state.m.add(-1, 'month')});
    };


    render(){
        let year = this.state.m.format('YYYY');
        let month = this.state.m.format('MMMM');
        let shortMonth = this.state.m.format('M');
        let days = moment(this.state.m.format('YYYY-MMMM'), "YYYY-MM").daysInMonth();
        let weekDay = parseInt(this.state.m.startOf('month').format('d'));
        let date = this.state.m;

        return(
            <>
                
                <CalendarInfo year={year} month={month} days={days} weekDay={weekDay} date={date} shortMonth={shortMonth}/>
                <button onClick={this.setPrevMonth}>previous month</button>
                <button onClick={this.setNextMonth}>next month</button>
                <TodoForm/>

            </>
        )
    }
}

export default Calendar;
