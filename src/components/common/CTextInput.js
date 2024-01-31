// Library imports
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

// Local imports
import {moderateScale} from '../../common/constant';
import {styles} from '../../themes';

export default function CTextInput({
  text,
  textInputStyle,
  mainTxtInp,
  onChangeText,
  value,
  onPress,
  keyboardType,
  align,
  onFocus,
  onBlur,
  LeftIcon,
  RightIcon,
  isSecure,
}) {
  const colors = useSelector(state => state.theme.theme);

  const [isSecurePass, setIsSecurePass] = useState(isSecure);

  const onPressSecureIcon = () => {
    setIsSecurePass(!isSecurePass);
  };

  return (
    <View
      style={[
        localStyles.main,
        mainTxtInp,
        {backgroundColor: colors.backgroundColor},
      ]}>
      {!!LeftIcon && <LeftIcon />}
      <TextInput
        placeholderTextColor={colors.GrayScale3}
        onFocus={onFocus}
        onBlur={onBlur}
        style={[localStyles.local, textInputStyle, {color: colors.GrayScale3}]}
        placeholder={text}
        value={value}
        secureTextEntry={isSecurePass}
        textAlign={align}
        onChangeText={onChangeText}
        onPress={onPress}
        keyboardType={keyboardType}
      />
      {!!RightIcon && <RightIcon />}
      {!!isSecure && (
        <TouchableOpacity onPress={onPressSecureIcon}>
          {!isSecurePass ? (
            <Feather
              name={'eye'}
              size={moderateScale(22)}
              color={colors.GrayScale3}
              style={styles.mr15}
            />
          ) : (
            <Feather
              name={'eye-off'}
              size={moderateScale(22)}
              color={colors.GrayScale3}
              style={styles.mr15}
            />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const localStyles = StyleSheet.create({
  main: {
    width: '100%',
    height: moderateScale(56),
    borderRadius: moderateScale(16),
    ...styles.rowCenter,
    ...styles.justifyBetween,
    ...styles.mt25,
    borderWidth: moderateScale(1),
  },
  local: {
    ...styles.pl15,
    ...styles.flex,
    width: '100%',
    height: moderateScale(80),
  },
});
