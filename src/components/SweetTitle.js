import React from 'react';
import { View } from 'react-native';

import SweetText from './SweetText';
import { largerFontSize, fontWeightBold } from '../typography';

const defaultStyles = {
  fontWeight: fontWeightBold,
  fontSize: largerFontSize,
};

export default ({ style, children }) => (
  <SweetText style={[defaultStyles, style]}>{children}</SweetText>
);
