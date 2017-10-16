import React from 'react';
import { Image } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SweetImage from '../src/components/SweetImage';

describe('SweetImage', () => {
  describe('source', () => {
    it('should render source from uri', () => {
      const image = 'https://st.depositphotos.com/1801791/1399/i/950/depositphotos_13999421-stock-photo-colorful-spiral-lollipop-lolly-pop.jpg';

      const view = shallow(<SweetImage image={image} />);

      expect(view.find(Image).props().source).to.eql({ uri: image });
    });
  });
});
