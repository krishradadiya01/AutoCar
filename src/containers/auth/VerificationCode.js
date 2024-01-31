// Library imports
import {StyleSheet, View, SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import CountDown from 'react-native-countdown-component';

// Local imports
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import Ctext from '../../components/common/Ctext';
import {styles} from '../../themes/index';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {getHeight, moderateScale} from '../../common/constant';
import CButton from '../../components/common/CButton';
import {AuthNav} from '../../navigation/navigationKeys';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';

export default function VerificationCode({route, navigation}) {
  const phone = route?.params?.phone;
  const colors = useSelector(state => state.theme.theme);

  const [otp, setOtp] = useState('');
  const [codeId, setCodeId] = useState('1');
  const [timeUp, setTimeUp] = useState(false);

  const onOtpChange = code => setOtp(code);

  const onPressFinishTimer = () => setTimeUp(true);

  const onPressResend = () => {
    setCodeId(codeId + '1');
    setOtp('');
    setTimeUp(false);
  };

  const onPressNewPassword = () => {
    if (otp === '') {
      Alert.alert(strings.PleaseFillOtp);
    } else {
      navigation.navigate(AuthNav.CreateNewPassword);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundColor, flex: 1}}>
      <View style={localStyles.main}>
        <KeyBoardAvoidWrapper>
          <View>
            <CHeader title={strings.VerificationCode} />
            <Ctext type={'R14'} color={colors.GrayScale3}>
              {strings.VerificationCodeDescription}
              <Ctext color={colors.contrast}>{phone}</Ctext>
            </Ctext>

            <OTPInputView
              pinCount={4}
              code={otp}
              onCodeChanged={onOtpChange}
              codeInputFieldStyle={[
                localStyles.pinStyle,
                {
                  color: colors.contrast,
                  backgroundColor: colors.backgroundColor,
                  borderColor: colors.BorderColor,
                },
              ]}
              codeInputHighlightStyle={{
                borderColor: colors.Primary,
              }}
              style={localStyles.inputStyle}
              secureTextEntry={true}
            />

            <View style={[styles.rowCenter, {gap: moderateScale(2)}]}>
              <Ctext type={'R14'} align={'center'} color={colors.GrayScale3}>
                {strings.ResendCode}
              </Ctext>
              {timeUp ? (
                <Ctext
                  type={'R14'}
                  align={'center'}
                  color={colors.contrast}
                  onPress={onPressResend}>
                  {strings.Resend}
                </Ctext>
              ) : (
                <CountDown
                  id={codeId}
                  onFinish={onPressFinishTimer}
                  until={360}
                  digitTxtStyle={[
                    localStyles.numbersStyle,
                    {color: colors.contrast},
                  ]}
                  digitStyle={{backgroundColor: colors.backgroundColor}}
                  timeToShow={['M', 'S']}
                  timeLabels={{m: null, s: null}}
                />
              )}
            </View>
          </View>
        </KeyBoardAvoidWrapper>

        <CButton
          text={strings.Verify}
          containerStyle={localStyles.buttonStyle}
          onPress={onPressNewPassword}
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
  pinStyle: {
    fontSize: moderateScale(24),
    borderRadius: moderateScale(12),
    height: getHeight(60),
    width: moderateScale(60),
  },
  inputStyle: {
    ...styles.mv30,
    height: getHeight(80),
  },
  numbersStyle: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  buttonStyle: {
    ...styles.mv25,
  },
});
