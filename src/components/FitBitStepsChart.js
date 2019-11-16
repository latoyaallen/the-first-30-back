import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  fitbitStepChart: {
    marginLeft: '11%',
    marginBottom: 50,
    '@media (min-width: 600px)': {
      marginLeft: '9%',
    },
    '@media (min-width: 780px)': {
      marginLeft: '9%',
    }
  },
});

const FitBitStepsChart = () => (
  <div className={css(styles.fitbitStepChart)}>
    <div className="App">
    </div>
  </div>
);

export default FitBitStepsChart;

// If we're going to use Aphrodite with d3, we need to make sure the the dom node that we call d3.select on is
// nested UNDER the node we use to style the chart.  Aphrodite appends the class names, and those names chage as we make // changes to the styles. So, the class names become unreliable.

