import React from 'react';
import { View } from 'react-native';

import { SweetText } from './SweetText';
import { LargeFontSize } from './typography';
import { Grey200 } from './colours';

const styles = {
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Grey200,
  },
  text: {
    fontWeight: 'bold',
    lineHeight: 24,
    fontSize: LargeFontSize,
  },
};

export default ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);
