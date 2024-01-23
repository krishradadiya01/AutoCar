import {TouchableOpacity, StyleSheet, View} from 'react-native';
import React from 'react';

// Local imports
import {moderateScale} from '../../common/constant';
import {styles} from '../../themes/index';
import typography from '../../themes/typography';
import CText from './Ctext';
import {useSelector} from 'react-redux';

const CButton = props => {
  const colors = useSelector(state => state.theme.theme);
  let {
    ChildLoginBtn,
    text,
    onPress,
    containerStyle,
    disabled,
    RightIcon,
    LeftIcon,
    backgroundColor,
    color,
  } = props;

  return (
    <View style={[styles.rowStart, styles.center]}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          localStyles.ParentButton,
          containerStyle,
          {backgroundColor: backgroundColor || colors.Primary},
        ]}
        onPress={onPress}>
        {!!LeftIcon && <LeftIcon />}
        <CText
          style={[
            localStyles.ChildButton,
            ChildLoginBtn,
            {color: color || colors.backgroundColor},
          ]}>
          {text || 'Continue'}
        </CText>
        {!!RightIcon && <RightIcon />}
      </TouchableOpacity>
    </View>
  );
};

const localStyles = StyleSheet.create({
  ParentButton: {
    borderRadius: moderateScale(12),
    width: '100%',
    height: moderateScale(56),
    ...styles.center,
    ...styles.mt50,
    ...styles.mv0,
  },

  ChildButton: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: 'white',
    ...typography.fontSizes.f14,
    ...typography.fontWeights.Bold,
  },
});

export default CButton;
