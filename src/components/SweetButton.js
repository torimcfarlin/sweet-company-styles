import React, { Component } from 'react';
import { Button, View } from 'react-native';

import {
  fairyFloss,
  fairyFlossShadow,
  bubbleGum,
  bubbleGumShadow,
  black,
  grey,
  white,
} from '../colours';

const colors = {
  primary: fairyFloss,
  secondary: bubbleGum,
  disabled: grey,
};

const textColors = {
  primary: white,
  secondary: black,
  disabled: colors.disabled,
};

const defaultStyles = {
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    borderWidth: 1,
    width: 200,
    height: 46,
    padding: 8,
  },
  primary: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    borderBottomWidth: 3,
    borderBottomColor: fairyFlossShadow,
  },
  secondary: {
    borderColor: colors.secondary,
    backgroundColor: colors.secondary,
    borderBottomWidth: 3,
    borderBottomColor: bubbleGumShadow,
  },
  disabled: {
    borderColor: colors.disabled,
  },
};

const getTextColor = (buttonType) => textColors[buttonType];

const getDefaultContainerStyles = (buttonType) =>
  [defaultStyles.container, defaultStyles[buttonType]];

export default ({ type, onPress, text, style }) => (
  <View style={getDefaultContainerStyles(type).concat(style)} >
    <Button
      title={text}
      color={getTextColor(type)}
      disabled={type === 'disabled'}
      onPress={onPress}
    />
  </View>
);
