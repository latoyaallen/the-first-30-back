import React from 'react';
import './App.css';
import * as d3 from 'd3'
import steps from './data/steps';
import Email from './components/Email';
import LinkedIn from './components/LinkedIn';
import Github from './components/Github';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  nameText: {
    marginLeft: '12%',
    marginTop: 20,
    marginBottom: 50,
    cursor: 'pointer',
    color: '#483d8b',
    width: '90%',
    '@media (min-width: 600px)': {
      marginLeft: '10%',
    },
    '@media (min-width: 780px)': {
      marginLeft: '9%',
    }
  },
  fitbitStepChart: {
    marginLeft: '11%',
    marginTop: 20,
    marginBottom: 50,
    cursor: 'pointer',
    '@media (min-width: 600px)': {
      marginLeft: '9%',
    },
    '@media (min-width: 780px)': {
      marginLeft: '9%',
    }
  },
});

class App extends React.Component {
  componentDidMount() {

    this.drawFitbitStepsChart();
  }

  drawFitbitStepsChart() {
    d3.select(".App") // create a viz inside the node I named app. Not sure how ekzobl got appended to it
      .selectAll("div") // and get all of the divs inside of the chart OR return an empty selection if no div exists
      .data(steps) // everything under .data will get executed data.size times.
      .enter() // creates placeholder method since you couldn't be bothered to create divs for your chart, LaToya
      .append("div") //adds a div each times it's called, which is equal to the size of your data
      .style("width", function(workout) { return (workout["steps"]/11) + "px";}) // styles the width with the value
      .style("stroke", "black")
      .text(function(workout) { return workout["day"] + " " + workout["steps"] + " steps"; }) ; // adds some text inside of the div
  }

  render() {
    return (
      <React.Fragment>
        <h1 className={css(styles.nameText)}>Starting a workout routine post injury is always a challenge.</h1>
        <h1 className={css(styles.nameText)}>We can track  your FitBit steps to ensure you're gradually increasing your physical activity.</h1>
        <div className={css(styles.fitbitStepChart)}>
          <div className="App">
          </div>
          <h2> You can find the code for this project {<Github />}. </h2>
          <h2> If you have any questions, message me on {<LinkedIn />}, or send me an {<Email />}. </h2>
        </div>
      </React.Fragment>
    )
  }
}

// If we're going to use Aphrodite with d3, we need to make sure the the dom node that we call d3.select on is
// nested UNDER the node we use to style the chart.  Aphrodite appends the class names, and those names chage as we make // changes to the styles. So, the class names become unreliable.

export default App;
