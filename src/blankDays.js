import React from "react";

class BlankDays extends React.Component {
    render(){
        let blank = Array.from({length:this.props.weekDay},(_, index) => index + 1);

        return(
            blank.map((blank, index) => <div key={index} className="day empty">BLANK</div>)
        )
    }
}

export default BlankDays;