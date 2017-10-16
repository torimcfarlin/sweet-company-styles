import React from 'react';
import { Image, View, TouchableHighlight } from 'react-native';

const re = new RegExp("^(http|https)://", "i");
const imageSource = (image) => re.test(image) ? { uri: image } : image;

export default ({ image, description, style }) => {
  const logDescription = () => console.info(description);
  return (
    <TouchableHighlight
      onPress={logDescription}
    >
      <View>
        <Image
          key={image}
          style={style}
          source={imageSource(image)}
        />
      </View>
    </TouchableHighlight>
  );
}
