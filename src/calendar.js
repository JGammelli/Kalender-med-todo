import React from "react";
import CalendarInfo from "./calendarInfo";
import moment from "moment";



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
        let shortMonth = this.state.m.format('MM');
        let days = moment(this.state.m.format('YYYY-MMMM'), "YYYY-MM").daysInMonth();
        let weekDay = parseInt(this.state.m.startOf('month').format('d'));
        let date = this.state.m;
        return(
            <>
                <h1>Calendar</h1>
                <CalendarInfo year={year} month={month} days={days} weekDay={weekDay} date={date} shortMonth={shortMonth}/>
                <button className="prevMonth" onClick={this.setPrevMonth}>previous month</button>
                <button className="nextMonth" onClick={this.setNextMonth}>next month</button>

            </>
        )
    }
}

export default Calendar;
