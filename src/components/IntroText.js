import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  text: {
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
});

const IntroText = () => (
  <div>
    <h1 className={css(styles.text)}>Starting a workout routine post injury is always a challenge.</h1>
    <h1 className={css(styles.text)}>We can track  your FitBit steps to ensure you're gradually increasing your physical activity.</h1>
  </div>
);

export default IntroText;
