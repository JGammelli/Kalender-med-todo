import React from "react";
import moment from "moment";

class WeekDays extends React.Component {
    render(){
        let weekdays = moment.weekdaysShort();
        return(
            weekdays.map((day) => <p key={day} className="weekDay">{day}</p>)
        )
    }
}
export default WeekDays;