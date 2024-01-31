// Library imports
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

// Local imports
import CHeader from '../../components/common/CHeader';
import {styles} from '../../themes/index';
import strings from '../../i18n/strings';
import CTextInput from '../../components/common/CTextInput';
import {UsFlag} from '../../assets/svgs';
import {moderateScale} from '../../common/constant';
import Ctext from '../../components/common/Ctext';
import CButton from '../../components/common/CButton';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import {validatePhone} from '../../utils/validators';
import {AuthNav} from '../../navigation/navigationKeys';

export default function ResetPasswordPhone({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  const BlurredStyle = {
    borderColor: colors.BorderColor,
  };
  const FocusedStyle = {
    borderColor: colors.Primary,
  };

  const [phone, setPhone] = useState('');
  const [showMessagePhone, setShowMessagePhone] = useState(false);

  const [passwordInputStyle, setPasswordInputStyle] = useState(BlurredStyle);

  const onFocusInput = onHighlight => onHighlight(FocusedStyle);
  const onBlurInput = onUnHighlight => onUnHighlight(BlurredStyle);

  const onFocusPassword = () => {
    onFocusInput(setPasswordInputStyle);
  };

  const onBlurPassword = () => {
    onBlurInput(setPasswordInputStyle);
  };

  const onChangePhone = text => {
    const {msg} = validatePhone(text);
    setPhone(text);
    setShowMessagePhone(msg);
  };

  const onPressSend = () => {
    if (phone === '' || showMessagePhone) {
      Alert.alert(strings.PleaseFillPhone);
    } else {
      navigation.navigate(AuthNav.VerificationCode, {phone: phone});
    }
  };

  const LeftIcon = () => (
    <TouchableOpacity style={localStyles.iconStyle}>
      <UsFlag />
      <Feather name={'chevron-down'} size={20} color={colors.contrast} />

      <View style={localStyles.straightLineStyle}>
        <Ctext color={colors.GrayScale4}>{'|'}</Ctext>
        <Ctext color={colors.GrayScale4}>{'|'}</Ctext>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundColor, flex: 1}}>
      <View style={localStyles.main}>
        <KeyBoardAvoidWrapper>
          <View>
            <CHeader
              title={strings.ResetPass}
              description={strings.EnterPhone}
            />
            <CTextInput
              onFocus={onFocusPassword}
              onBlur={onBlurPassword}
              onChangeText={onChangePhone}
              value={phone}
              text={strings.PhoneNumber}
              keyboardType={'phone-pad'}
              mainTxtInp={[localStyles.textInputStyle, passwordInputStyle]}
              LeftIcon={() => <LeftIcon />}
            />
          </View>
          {showMessagePhone ? (
            <Ctext color={colors.Red}>{showMessagePhone}</Ctext>
          ) : null}
        </KeyBoardAvoidWrapper>
        <CButton
          text={strings.SendCode}
          containerStyle={localStyles.buttonStyle}
          onPress={onPressSend}
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
    ...styles.ph20,
  },
  iconStyle: {
    ...styles.rowCenter,
    gap: moderateScale(7),
  },
  straightLineStyle: {
    ...styles.pl10,
    ...styles.columnCenter,
    gap: moderateScale(-4),
  },
  buttonStyle: {
    ...styles.mv25,
  },
});
