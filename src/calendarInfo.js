import React, { useEffect, useState } from "react";
import moment from "moment";
import CalendarDays from "./calendarDays";

class CalendarInfo extends React.Component {
    render(){

        return(
            <>
                <h1>{this.props.year}</h1>
                <h3>{this.props.month}</h3>
                <p>{this.props.weekday}</p>

                <div className="dayContainer"> 
                    <CalendarDays days={this.props.days}/>
                </div>
                <button>previous month</button>
                <button>next month</button>
            </>
        )
    }
}

export default CalendarInfo;




