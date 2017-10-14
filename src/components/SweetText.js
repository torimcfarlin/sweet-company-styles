import React from 'react';
import { Text, View } from 'react-native';

import { StandardFontSize, StandardFontFamily } from '../typography';

const defaultStyles = {
  fontFamily: StandardFontFamily,
  fontSize: StandardFontSize,
};

export default ({ style, children }) => (
  <View>
    <Text style={[defaultStyles, style]}>
      {children}
    </Text>
  </View>
);
