import React from 'react';
import { Text, View } from 'react-native';

import { standardFontSize, standardFontFamily } from '../typography';

const defaultStyles = {
  fontFamily: standardFontFamily,
  fontSize: standardFontSize,
};

export default ({ style, children }) => (
  <Text style={[defaultStyles, style]}>
    {children}
  </Text>
);
