import React from 'react';
import { Button } from 'react-native';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { SweetButton, white, grey } from '../src';

describe('SweetButton', () => {
  describe('type', () => {
    let sweetButton;

    context('primary', () => {
      const type = 'primary';

      beforeEach(() => {
        sweetButton = shallow(<SweetButton type={type} />);
      });

      it('should have Button with disabled prop set to false', () => {
        expect(sweetButton.find(Button)).to.have.prop('disabled', false);
      });

      it('should have Button with text color white', () => {
        expect(sweetButton.find(Button)).to.have.prop('color', white);
      });
    });

    context('disabled', () => {
      const type = 'disabled';

      beforeEach(() => {
        sweetButton = shallow(<SweetButton type={type} />);
      });

      it('should have Button with disabled prop set to true', () => {
        expect(sweetButton.find(Button)).to.have.prop('disabled', true);
      });

      it('should have Button with text color grey', () => {
        expect(sweetButton.find(Button)).to.have.prop('color', grey);
      });
    });
  });

  describe('onPress prop', () => {
    it('should call pressHandler', () => {
      const pressHandler = sinon.spy();
      const sweetButton = shallow(<SweetButton onPress={pressHandler} />);

      sweetButton.find(Button).simulate('press');

      expect(pressHandler).to.have.been.called();
    });
  });
});
