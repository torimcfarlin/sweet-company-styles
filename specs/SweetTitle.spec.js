import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { SweetTitle, SweetText } from '../src';
import { StandardFontSize, StandardFontFamily } from '../src/typography';
import { DarkPink } from '../src/colours';

describe('SweetTitle', () => {
  describe('SweetText', () => {
    it('should render text', () => {
      text = 'Wicked Awesome Title';
      const view = shallow(<SweetTitle text={text} />);

      expect(view.find(SweetText).props().children).to.eql(text);
    });
  });
});
