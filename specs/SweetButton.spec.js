import React from 'react';
import { Button } from 'react-native';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import SweetButton from '../src/SweetButton';

describe('SweetButton', () => {
  describe('type=disabled', () => {
    it('should have Button with disabled prop set to true', () => {
      const sweetButton = shallow(<SweetButton type="disabled" />);

      expect(button.find(Button)).to.have.prop('disabled', true);
    });
  });

  describe('onPress', () => {
    it('should call pressHandler', () => {
      const pressHandler = sinon.spy();
      const sweetButton = shallow(<SweetButton
        onPress={pressHandler}
      />);

      button.simulate('press');

      expect(pressHandler).to.have.been.called();
    });
  });
});
