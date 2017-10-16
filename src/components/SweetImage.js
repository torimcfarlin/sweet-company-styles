import React from 'react';
import { Image, View } from 'react-native';

const re = new RegExp("^(http|https)://", "i");
const imageSource = (image) => re.test(image) ? { uri: image } : image;

export default ({ image, description, style }) => (
  <View>
    <Image
      key={image}
      style={style}
      source={imageSource(image)}
    />
  </View>
);
