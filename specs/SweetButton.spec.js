import React from 'react';
import { Button } from 'react-native';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import dirtyChai from 'dirty-chai';
import chaiEnzyme from 'chai-enzyme';

import { SweetButton } from '../src';

chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.use(dirtyChai);

describe('SweetButton', () => {
  describe('type!=disabled', () => {
    it('should have Button with disabled prop set to false', () => {
      const sweetButton = shallow(<SweetButton type="primary" />);

      expect(sweetButton.find(Button)).to.have.prop('disabled', false);
    });
  });

  describe('type=disabled', () => {
    it('should have Button with disabled prop set to true', () => {
      const sweetButton = shallow(<SweetButton type="disabled" />);

      expect(sweetButton.find(Button)).to.have.prop('disabled', true);
    });
  });

  describe('onPress', () => {
    it('should call pressHandler', () => {
      const pressHandler = sinon.spy();
      const sweetButton = shallow(<SweetButton
        onPress={pressHandler}
      />);

      sweetButton.simulate('press');

      expect(pressHandler).to.have.been.called();
    });
  });
});
