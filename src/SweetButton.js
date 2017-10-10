import React, { Component } from 'react';
import { Button, View } from 'react-native';

import SweetText from './SweetText';
import {
  DarkPink,
  DarkPinkShadow,
  White,
  Grey300,
  Grey200,
  LightPink,
  LightPinkShadow,
  Black,
} from './colours';

const colors = {
  primary: DarkPink,
  secondary: LightPink,
  obscured: Grey200,
  disabled: Grey300,
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
    borderBottomColor: DarkPinkShadow,
  },
  secondary: {
    borderColor: colors.secondary,
    backgroundColor: colors.secondary,
    borderBottomWidth: 3,
    borderBottomColor: LightPinkShadow,
  },
  obscured: {
    borderColor: colors.obscured,
    backgroundColor: colors.obscured,
    borderBottomWidth: 3,
    borderBottomColor: Grey300,
  },
  disabled: {
    borderColor: colors.disabled,
  },
};

const defaultTextStyles = {
  primary: {
    color: White,
  },
  secondary: {
    color: Black,
  },
  obscured: {
    color: Black,
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

export default class Button extends Component {
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
          <Text style={getTextStyle(type)}>{text}</Text>
        </View>
      </Button>
    );
  }
}
