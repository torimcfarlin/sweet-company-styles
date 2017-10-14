import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { SweetTitle, SweetText } from '../src';
import { fontWeightBold, largerFontSize } from '../src/typography';
import { darkPink } from '../src/colours';

describe('SweetTitle', () => {
  describe('styles', () => {
    it('should call have default styles', () => {
      const expectedStyles = {
        fontWeight: fontWeightBold,
        fontSize: largerFontSize,
      };

      const view = shallow(<SweetTitle />);

      expect(view.find(SweetText).props().style[0]).to.eql(expectedStyles);
    });

    it('should accept style as props', () => {
      const sweetStyles = { color: darkPink };
      const view = shallow(<SweetTitle style={sweetStyles}/>);

      expect(view.find(SweetText).props().style[1]).to.eql(sweetStyles);
    });
  });

  describe('children', () => {
    it('should render SweetText', () => {
      const someText = 'Wicked Awesome Title';
      const view = shallow(<SweetTitle>{someText}</SweetTitle>);

      expect(view.find(SweetText).children().node).to.eql(someText);
    });
  });
});
