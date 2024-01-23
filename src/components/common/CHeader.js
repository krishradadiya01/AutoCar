import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Local imports
import {styles} from '../../themes';
import CText from './Ctext';
import {moderateScale} from '../../common/constant';
import {BackButton} from '../../assets/svgs';

export default function CHeader(props) {
  const {
    title,
    onPressBack,
    isHideBack,
    rightIcon,
    customStyle,
    containerSty,
    color = 'black',
  } = props;
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();

  return (
    <View
      style={[
        localStyles.container,
        !!isHideBack && styles.ph10,
        containerSty,
      ]}>
      {!isHideBack && (
        <TouchableOpacity
          onPress={onPressBack || goBack}
          style={localStyles.backIconSty}>
          <BackButton style={localStyles.imageStyle} />
        </TouchableOpacity>
      )}
      <View style={[styles.flex, styles.mh40, customStyle]}>
        <CText color={color} align={'center'} type={'B18'} numberOfLines={1}>
          {title}
        </CText>
      </View>
      {!!rightIcon && rightIcon}
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    ...styles.rowSpaceBetween,
    ...styles.pv15,
    height: moderateScale(60),
  },
  backIconSty: {
    borderRadius: moderateScale(20),
    position: 'absolute',
    zIndex: 1,
  },
  senderContainer: {
    ...styles.p15,
    ...styles.flexRow,
    maxWidth: '80%',
    ...styles.itemsEnd,
    ...styles.mt10,
  },
  imageStyle: {
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    ...styles.mt10,
    ...styles.flex,
  },
});
