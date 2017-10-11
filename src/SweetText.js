import React from 'react';
import { Text } from 'react-native';

import { StandardFontSize, StandardFontFamily } from './typography';

const defaultStyles = {
  fontFamily: StandardFontFamily,
  fontSize: StandardFontSize,
};

export default ({ style, children }) => (
  <Text style={[defaultStyles, style]}>
    {children}
  </Text>
);
