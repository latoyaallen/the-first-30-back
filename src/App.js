import React from 'react';
import './App.css';
import steps from './data/steps';
import IntroText from './components/IntroText';
import Contact from './components/Contact';
import FitBitStepsChart from './components/FitBitStepsChart';
import WorkoutSchedule from './components/WorkoutSchedule';
import drawFitBitStepsChart from './lib/drawFitBitStepsChart';

class App extends React.Component {
  componentDidMount() {
    this.handleFitbitStepsChart();
  }

  handleFitbitStepsChart() {
    drawFitBitStepsChart(steps);
  }

  render() {
    return (
      <React.Fragment>
        <IntroText />
        <FitBitStepsChart />
        <Contact />
        <WorkoutSchedule />
      </React.Fragment>
    )
  }
}

export default App;
