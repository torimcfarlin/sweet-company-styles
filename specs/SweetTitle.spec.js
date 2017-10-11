import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SweetTitle from '../src/SweetTitle';
import { StandardFontSize, StandardFontFamily } from '../src/typography';
import { DarkPink } from '../src/colours';

describe('SweetTitle', () => {
  describe('styles', () => {
    it('should call have default styles', () => {
      const view = shallow(<SweetTitle />);

      expect(view.props().style[0]).to.eql({ fontFamily: StandardFontFamily, fontSize: StandardFontSize });
    });

    it('should accept style as props', () => {
      const styles = { color: DarkPink };
      const view = shallow(<SweetTitle style={styles}/>);

      expect(view.props().style[1]).to.eql(styles);
    });
  });

  describe('children', () => {
    it('should render children', () => {
      const someText = 'Wicked Awesome Text';
      const view = shallow(<SweetTitle>{someText}</SweetTitle>);

      expect(view.find(Text).children().node).to.eql(someText);
    });
  });
});
