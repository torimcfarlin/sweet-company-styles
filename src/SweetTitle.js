import React from 'react';
import { View } from 'react-native';

import SweetText from './SweetText';
import { LargeFontSize, FontWeightBold } from './typography';
import { Grey200 } from './colours';

const styles = {
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: Grey200,
  },
  text: {
    fontWeight: FontWeightBold,
    lineHeight: 24,
    fontSize: LargeFontSize,
  },
};

export default ({ text }) => (
  <View style={styles.container}>
    <SweetText style={styles.text}>{text}</SweetText>
  </View>
);
