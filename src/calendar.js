import React, { useEffect, useState } from "react";
import CalendarInfo from "./calendarInfo";
import moment from "moment";
import { render } from "@testing-library/react";


class Calendar extends React.Component {

    state = {
        year: moment().format('YYYY'),
        month : moment().format('MMMM'),
        days : moment(moment().format('YYYY-MMMM'), "YYYY-MM").daysInMonth(),
        weekDay : moment().startOf('month').format('ddd')
    }
    
    render(){
        return(
            <>
                <CalendarInfo year={this.state.year} month={this.state.month} days={this.state.days} weekday={this.state.weekDay}/>
            </>
        )
    }
}

export default Calendar;
