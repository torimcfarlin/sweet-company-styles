import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SweetText from '../src/SweetText';
import { StandardFontSize, StandardFontFamily } from '../src/typography';

describe('SweetText', () => {
  describe('styles', () => {
    it('should call have default styles', () => {
      const view = shallow(<SweetText />);

      expect(view.props.style).to.eql({ fontFamily: StandardFontFamily, fontSize: StandardFontSize });
    });

    it('should accept style as props', () => {
      const image = { uri: 'some image uri' };
      const view = shallow(<InteractiveImage
        image={image}
        onPhotoOpen={onPhotoOpenHandlerSpy}
      />);

      view.find(TouchableHighlight).simulate('press');

      expect(onPhotoOpenHandlerSpy).to.have.been.calledWith(image);
    });
  });

  describe('children', () => {
    it('should accept children as props', () => {
      const image = { uri: 'some image uri' };
      const view = shallow(<InteractiveImage
        image={image}
        onPhotoOpen={onPhotoOpenHandlerSpy}
      />);

      view.find(TouchableHighlight).simulate('press');

      expect(onPhotoOpenHandlerSpy).to.have.been.calledWith(image);
    });
  });
});
