import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SweetText from '../src/SweetText';
import { StandardFontSize, StandardFontFamily } from '../src/typography';
import { DarkPink } from '../src/colours';

describe('SweetText', () => {
  describe('styles', () => {
    it('should call have default styles', () => {
      const view = shallow(<SweetText />);

      expect(view.find(Text).props().style[0]).to.eql({ fontFamily: StandardFontFamily, fontSize: StandardFontSize });
    });

    it('should accept style as props', () => {
      const sweetStyles = { color: DarkPink };
      const view = shallow(<SweetText style={sweetStyles}/>);

      expect(view.find(Text).props().style[1]).to.eql(sweetStyles);
    });
  });

  describe('children', () => {
    it('should render children', () => {
      const someText = 'Wicked Awesome Text';
      const view = shallow(<SweetText>{someText}</SweetText>);

      expect(view.find(Text).children().node).to.eql(someText);
    });
  });
});
