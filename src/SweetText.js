import React from 'react';
import { Text } from 'react-native';

import { StandardFontSize, StandardFontFamily } from './typography';

export default ({ style, children }) => (
  <Text
    style={[{ fontFamily: StandardFontFamily, fontSize: StandardFontSize }, style]}
  >
    {children}
  </Text>
);
