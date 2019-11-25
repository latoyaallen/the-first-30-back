import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  text: {
    marginLeft: '12%',
    marginTop: 20,
    marginBottom: 50,
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

const WorkoutSchedule = () => (
  <div>
    <h1 className={css(styles.text)}>Workout Schedule:</h1>
    <h3 className={css(styles.text)}>Monday: Bike</h3>
    <h3 className={css(styles.text)}>Tuesday: HIIT</h3>
    <h3 className={css(styles.text)}>Wednesday/Thursday: Active Rest</h3>
    <h3 className={css(styles.text)}>Friday: Full Body Super Sets</h3>
    <h3 className={css(styles.text)}>Saturday/Sunday: Active Rest</h3>
  </div>
);

export default WorkoutSchedule;
