// Library imports
import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

// Local imports
import {styles} from '../../themes';
import {moderateScale} from '../../common/constant';
import {BackButton} from '../../assets/svgs';
import Ctext from './Ctext';

export default function CHeader(props) {
  const colors = useSelector(state => state.theme.theme);
  const {
    title,
    description,
    titleStyle,
    customDescriptionStyle,
    customMainStyle,
    onPressBack,
  } = props;
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView style={customMainStyle}>
      <TouchableOpacity style={{width: '8%'}} onPress={onPressBack || goBack}>
        <BackButton style={localStyles.imgStyle} />
      </TouchableOpacity>

      <Ctext
        type={'B24'}
        color={colors.contrast}
        style={[localStyles.titleTxt, titleStyle]}>
        {title || null}
      </Ctext>
      <Ctext
        color={colors.GrayScale3}
        type={'R14'}
        style={[localStyles.descriptionStyle, customDescriptionStyle]}>
        {description || null}
      </Ctext>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  titleTxt: {
    ...styles.mt5,
  },
  imgStyle: {
    width: moderateScale(24),
    height: moderateScale(24),
    ...styles.mv25,
  },
  descriptionStyle: {
    ...styles.mt15,
  },
});
