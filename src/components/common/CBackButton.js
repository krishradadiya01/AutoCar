import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

// Local imports
import {styles} from '../../themes';
import {moderateScale} from '../../common/constant';
import {BackButton} from '../../assets/svgs';

export default function CBackButton(props) {
  let {imgStyle, onPress, containerStyle} = props;
  return (
    <TouchableOpacity onPress={onPress} style={containerStyle}>
      <BackButton
        style={[localStyles.imageStyle, imgStyle]}
        onPress={onPress}
      />
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({});
