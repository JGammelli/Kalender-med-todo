import React, { useEffect, useState } from "react";
import moment from "moment";


class CalendarDays extends React.Component {
    render(){

        let days = Array.from({length:this.props.days},(_, index) => index + 1);
        console.log(typeof this.props.days);

        return(
            days.map((day) => <div className="day"><p>{day}</p></div>)
        )
    }
}

export default CalendarDays;
