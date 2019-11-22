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
    <h1 className={css(styles.text)}>Monday: HIIT</h1>
    <h1 className={css(styles.text)}>Tuesday: Rest</h1>
    <h1 className={css(styles.text)}>Wednesday: HIIT</h1>
    <h1 className={css(styles.text)}>Wednesday: Yoga/Stretch</h1>
    <h1 className={css(styles.text)}>Thursday: Legs</h1>
    <h1 className={css(styles.text)}>Friday: Upper Body</h1>
    <h1 className={css(styles.text)}>Saturday: Yoga/Stretch</h1>
    <h1 className={css(styles.text)}>Sunday: Rest</h1>
  </div>
);

export default WorkoutSchedule;
