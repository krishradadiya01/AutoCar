// Library imports
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import React, {useState} from 'react';

// Local imports
import {useSelector} from 'react-redux';
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import {styles} from '../../themes/index';
import Ctext from '../../components/common/Ctext';
import CTextInput from '../../components/common/CTextInput';
import {moderateScale} from '../../common/constant';
import {validatePassword} from '../../utils/validators';
import CButton from '../../components/common/CButton';
import {AuthNav} from '../../navigation/navigationKeys';

export default function CreateNewPassword({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  const BlurredStyle = {
    borderColor: colors.BorderColor,
  };
  const FocusedStyle = {
    borderColor: colors.Primary,
  };

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showMessageNewPassword, setShowMessageNewPassword] = useState(false);
  const [showMessageConfirmPassword, setShowMessageConfirmPassword] =
    useState(false);

  const [newPasswordInputStyle, setNewPasswordInputStyle] =
    useState(BlurredStyle);
  const [confirmPasswordInputStyle, setConfirmPasswordInputStyle] =
    useState(BlurredStyle);

  const onFocusInput = onHighlight => onHighlight(FocusedStyle);
  const onBlurInput = onUnHighlight => onUnHighlight(BlurredStyle);

  const onFocusNewPassword = () => {
    onFocusInput(setNewPasswordInputStyle);
  };

  const onBlurNewPassword = () => {
    onBlurInput(setNewPasswordInputStyle);
  };

  const onFocusConfirmPassword = () => {
    onFocusInput(setConfirmPasswordInputStyle);
  };

  const onBlurConfirmPassword = () => {
    onBlurInput(setConfirmPasswordInputStyle);
  };

  const onChangeNewPassword = text => {
    const {msg} = validatePassword(text);
    setShowMessageNewPassword(msg);
    setNewPassword(text);
  };

  const onChangeConfirmPassword = text => {
    const {msg} = validatePassword(text);
    setShowMessageConfirmPassword(msg);
    setConfirmPassword(text);
  };

  const onPressResetSuccess = () => {
    if (newPassword !== confirmPassword) {
      setShowMessageConfirmPassword(strings.BothPassMustMatch);
    } else if (
      newPassword === '' ||
      confirmPassword === '' ||
      showMessageNewPassword ||
      showMessageConfirmPassword
    ) {
      navigation.navigate(AuthNav.ResetSuccess);
    }
  };

  const CommonComponentTextInput = ({
    title,
    style,
    value,
    extraStyle,
    onFocus,
    onBlur,
    onChangeText,
  }) => (
    <View style={style}>
      <View style={localStyles.mainTxtInput}>
        <Ctext type={'R14'} color={colors.GrayScale3}>
          {title}
        </Ctext>
        <CTextInput
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          onChangeText={onChangeText}
          LeftIcon={() => (
            <Feather
              name={'key'}
              size={moderateScale(22)}
              color={colors.GrayScale3}
              style={styles.ml15}
            />
          )}
          isSecure={true}
          mainTxtInp={[localStyles.textInputStyle, extraStyle]}
        />
      </View>
    </View>
  );

  const CommonComponentPasswordStrength = () => (
    <View
      style={[
        localStyles.mainContainer,
        {
          backgroundColor: colors.BorderColor,
          borderColor: colors.BorderColor,
        },
      ]}></View>
  );

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundColor, flex: 1}}>
      <View style={localStyles.main}>
        <View>
          <CHeader
            title={strings.CreateNewPassword}
            description={strings.CreateNewPasswordDescription}
          />

          <CommonComponentTextInput
            title={strings.NewPassword}
            value={newPassword}
            onChangeText={onChangeNewPassword}
            onFocus={onFocusNewPassword}
            onBlur={onBlurNewPassword}
            extraStyle={newPasswordInputStyle}
          />

          {showMessageNewPassword ? (
            <Ctext color={colors.Red}>{showMessageNewPassword}</Ctext>
          ) : null}

          <View style={localStyles.outerComponentOfPasswordStrength}>
            <CommonComponentPasswordStrength />
            <CommonComponentPasswordStrength />
            <CommonComponentPasswordStrength />
            <CommonComponentPasswordStrength />

            <Ctext color={colors.GrayScale3} type={'R14'}>
              {strings.Weak}
            </Ctext>
          </View>

          <CommonComponentTextInput
            title={strings.ConfirmPassword}
            value={confirmPassword}
            onChangeText={onChangeConfirmPassword}
            onFocus={onFocusConfirmPassword}
            onBlur={onBlurConfirmPassword}
            extraStyle={confirmPasswordInputStyle}
          />

          {showMessageConfirmPassword ? (
            <Ctext color={colors.Red}>{showMessageConfirmPassword}</Ctext>
          ) : null}
        </View>

        <CButton
          onPress={onPressResetSuccess}
          containerStyle={localStyles.mainButtonStyle}
        />
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.mh20,
    ...styles.flex,
    ...styles.justifyBetween,
  },
  textInputStyle: {
    ...styles.mt0,
  },
  mainTxtInput: {
    gap: moderateScale(10),
    ...styles.mt40,
  },
  mainContainer: {
    borderWidth: moderateScale(2),
    height: moderateScale(4),
    width: moderateScale(58),
  },
  outerComponentOfPasswordStrength: {
    ...styles.rowCenter,
    gap: moderateScale(10),
  },
  mainButtonStyle: {
    ...styles.mv25,
  },
});
