//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

// constants
var greeting = "Hello";
const hoursOfDay = new Date().getUTCHours();
const customStyle = { color: "black" };

// TASK:
// Show a single h1 that says "Good morning" if between midnight and 12PM.
// or "Good Afternoon" if between 12PM and 6PM.
// or "Good evening" if between 6PM and midnight.
// Dynamically change the color of the h1 using inline css styles.
// Morning = red, Afternoon = green, Night = blue.

if (hoursOfDay < 12) {
  customStyle.color = "red";
  greeting = "Good morning";
} else if (hoursOfDay >= 12 && hoursOfDay < 18) {
  customStyle.color = "green";
  greeting = "Good afternoon";
} else {
  customStyle.color = "blue";
  greeting = "Good evening";
}

ReactDOM.render(
  <div>
    {/* Apply the "heading" style in the styles.css */}
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
