import React from 'react';
import Email from './Email';
import LinkedIn from './LinkedIn';
import Github from './Github';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  text: {
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
const Contact = () => (
  <div>
    <h2 className={css(styles.text)}> You can find the code for this project {<Github />}. </h2>
    <h2 className={css(styles.text)}> If you have any questions, message me on {<LinkedIn />}, or send me an {<Email />}. </h2>
  </div>
);

export default Contact;
