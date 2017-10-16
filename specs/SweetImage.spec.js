import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SweetImage from '../src/components/SweetImage';

const image = 'https://st.depositphotos.com/1801791/1399/i/950/depositphotos_13999421-stock-photo-colorful-spiral-lollipop-lolly-pop.jpg';

describe('SweetImage', () => {
  describe('source', () => {
    it('should render source from uri', () => {
      const view = shallow(<SweetImage image={image} />);

      expect(view.find(Image).props().source).to.eql({ uri: image });
    });
  });

  describe('description', () => {
    let consoleStub;

    beforeEach(() => {
      consoleStub = sinon.stub(console, 'info');
    });

    afterEach(() => {
      console.info.restore();
    });

    it('should console log description when pressed', () => {
      const description = 'So long, Candy Boys'
      const view = shallow(<SweetImage image={image} description={description} />);

      view.find(TouchableHighlight).simulate('press');

      expect(consoleStub).to.have.been.calledWith(description);
    });
  });
});
