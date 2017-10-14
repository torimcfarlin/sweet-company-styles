import React, { Component } from 'react';
import { Button, View } from 'react-native';

import SweetText from './SweetText';
import {
  darkPink,
  darkPinkShadow,
  white,
  grey300,
  grey200,
  lightPink,
  lightPinkShadow,
  black,
} from '../colours';

const colors = {
  primary: darkPink,
  secondary: lightPink,
  obscured: grey200,
  disabled: grey300,
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
    borderBottomColor: darkPinkShadow,
  },
  secondary: {
    borderColor: colors.secondary,
    backgroundColor: colors.secondary,
    borderBottomWidth: 3,
    borderBottomColor: lightPinkShadow,
  },
  obscured: {
    borderColor: colors.obscured,
    backgroundColor: colors.obscured,
    borderBottomWidth: 3,
    borderBottomColor: grey300,
  },
  disabled: {
    borderColor: colors.disabled,
  },
};

const defaultTextStyles = {
  primary: {
    color: white,
  },
  secondary: {
    color: black,
  },
  obscured: {
    color: black,
  },
  disabled: {
    color: colors.disabled,
  },
};

const pressedContainerStyles = {
  primary: {
    borderBottomWidth: 0,
    borderBottomColor: colors.primary,
  },
  secondary: {
    borderBottomWidth: 0,
    borderBottomColor: colors.secondary,
  },
  obscured: {
    borderBottomWidth: 0,
    borderBottomColor: colors.obscured,
  },
};

const getContainerStyle = (buttonType) => defaultStyles[buttonType];

const getTextStyle = (buttonType) => defaultTextStyles[buttonType];

const getDefaultContainerStyles = (buttonType) =>
  [defaultStyles.container, getContainerStyle(buttonType)];

const getPressedContainerStyles = (buttonType) =>
  getDefaultContainerStyles(buttonType).concat(pressedContainerStyles[buttonType]);

export default class SweetButton extends Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(pressed) {
    this.setState({ pressed });
  }

  render() {
    const { type, onPress, text, style } = this.props;
    const { pressed } = this.state;
    return (
      <Button
        style={(pressed ? getPressedContainerStyles(type) : getDefaultContainerStyles(type))
          .concat(style)
        }
        disabled={type === 'disabled'}
        underlayColor={colors[type]}
        onPress={onPress}
        onShowUnderlay={() => this.handlePress(true)}
        onHideUnderlay={() => this.handlePress(false)}
        delayPressIn={0}
        delayPressOut={0}
      >
        <View>
          <SweetText style={getTextStyle(type)}>{text}</SweetText>
        </View>
      </Button>
    );
  }
}
