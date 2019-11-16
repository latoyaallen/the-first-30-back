import React from 'react';
import './App.css';
import * as d3 from 'd3'
import workouts from './data/workouts';

class App extends React.Component {
  componentDidMount() {
    this.drawWorkoutChart();
  }

  drawWorkoutChart() {
    console.log("it gets here");
    console.log(workouts);
    d3.select(".App") // create a viz inside the node App
      .selectAll("div") // and get all of the divs inside of the chart OR return an empty selection if no div exists
      .data(workouts) // everything under .data will get executed data.size times.
      .enter()
      .append("div") //adds a div each times it's called
      .style("width", function(workout) { return workout + "px";})
      .text(function(workout) { return workout; });
  }

  render() {
    return (
      <div className="App">
      </div>
    )
  }
}

export default App;
