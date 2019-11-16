import * as d3 from 'd3'

const drawFitBitStepsChart = (steps) => {
  d3.select(".App") // create a viz inside the node I named app. Not sure how ekzobl got appended to it
    .selectAll("div") // and get all of the divs inside of the chart OR return an empty selection if no div exists
    .data(steps) // everything under .data will get executed data.size times.
    .enter() // creates placeholder method since you couldn't be bothered to create divs for your chart, LaToya
    .append("div") //adds a div each times it's called, which is equal to the size of your data
    .style("width", function(workout) { return (workout["steps"]/11) + "px";}) // styles the width with the value
    .style("stroke", "black")
    .text(function(workout) { return workout["day"] + " " + workout["steps"] + " steps"; }) ; // adds some text inside of the div
}

export default drawFitBitStepsChart;
