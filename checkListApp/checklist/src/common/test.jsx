import React, { Component } from "react";

class Test extends Component {

 dayName = () => {
   const d = new Date('11/10/2010');
   let weekday = new Array(7);
   weekday[0] = "Sunday";
   weekday[1] = "Monday";
   weekday[2] = "Tuesday";
   weekday[3] = "Wednesday";
   weekday[4] = "Thursday";
   weekday[5] = "Friday";
   weekday[6] = "Saturday";
  const day = weekday[d.getDay()];
  console.log(day);
 };
  render() {
    return <button onClick={this.dayName}>Fuck me</button>;
  }
}

export default Test;
