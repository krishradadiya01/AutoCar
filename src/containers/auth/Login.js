// Library Imports
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

// Local Imports
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import CTextInput from '../../components/common/CTextInput';
import {moderateScale} from '../../common/constant';
import {styles} from '../../themes/index';
import Ctext from '../../components/common/Ctext';
import CButton from '../../components/common/CButton';
import images from '../../assets/images';
import {AuthNav} from '../../navigation/navigationKeys';
import {validateEmail, validatePassword} from '../../utils/validators';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';

export default function Login({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  const BlurredStyle = {
    borderColor: colors.BorderColor,
  };
  const FocusedStyle = {
    borderColor: colors.Primary,
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showMessageEmail, setShowMessageEmail] = useState(false);
  const [showMessagePassword, setShowMessagePassword] = useState(false);

  const [emailInputStyle, setEmailInputStyle] = useState(BlurredStyle);
  const [passwordInputStyle, setPasswordInputStyle] = useState(BlurredStyle);

  const onFocusInput = onHighlight => onHighlight(FocusedStyle);
  const onBlurInput = onUnHighlight => onUnHighlight(BlurredStyle);

  const onFocusEmail = () => {
    onFocusInput(setEmailInputStyle);
  };

  const onBlurEmail = () => {
    onBlurInput(setEmailInputStyle);
  };

  const onFocusPassword = () => {
    onFocusInput(setPasswordInputStyle);
  };

  const onBlurPassword = () => {
    onBlurInput(setPasswordInputStyle);
  };

  const onPressChangeEmail = txt => {
    const {msg} = validateEmail(txt);
    setEmail(txt);
    setShowMessageEmail(msg);
  };

  const onPressChangPass = txt => {
    const {msg} = validatePassword(txt);
    setPassword(txt);
    setShowMessagePassword(msg);
  };

  const onPressSignUp = () => {
    navigation.navigate(AuthNav.Register);
  };

  const onPressForgotPass = () => {
    navigation.navigate(AuthNav.ForgotPassword);
  };

  const onPressLogin = async () => {
    if (
      email === '' ||
      showMessageEmail ||
      showMessagePassword ||
      password === ''
    ) {
      Alert.alert(strings.PleaseFill);
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: AuthNav.LoginSuccess}],
      });
    }
  };

  const CommonComponent = ({text, icon}) => {
    return (
      <View>
        <TouchableOpacity
          style={[
            localStyles.outerContainerOfCommonComponent,
            {borderColor: colors.BorderColor},
          ]}>
          <Image
            source={icon}
            style={{
              width: moderateScale(24),
              height: moderateScale(24),
            }}
          />
          <Ctext type={'B14'} align={'center'} color={colors.contrast}>
            {text}
          </Ctext>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundColor, flex: 1}}>
      <View style={localStyles.outerMainComponent}>
        <KeyBoardAvoidWrapper>
          <View>
            <CHeader
              title={strings.WelcomeBack}
              description={strings.LoginText}
            />
            <CTextInput
              mainTxtInp={[emailInputStyle]}
              onFocus={onFocusEmail}
              onBlur={onBlurEmail}
              value={email}
              onChangeText={onPressChangeEmail}
              color={colors.GrayScale3}
              text={strings.Email}
              LeftIcon={() => (
                <Material
                  name={'email-outline'}
                  size={moderateScale(22)}
                  color={colors.GrayScale3}
                  style={styles.ml15}
                />
              )}
            />

            {showMessageEmail ? (
              <Ctext color={colors.Red}>{showMessageEmail}</Ctext>
            ) : null}

            <CTextInput
              mainTxtInp={passwordInputStyle}
              onFocus={onFocusPassword}
              onBlur={onBlurPassword}
              value={password}
              onChangeText={onPressChangPass}
              color={colors.GrayScale3}
              LeftIcon={() => (
                <Feather
                  name={'key'}
                  size={moderateScale(22)}
                  color={colors.GrayScale3}
                  style={styles.ml15}
                />
              )}
              text={strings.Password}
              isSecure={true}
            />

            {showMessagePassword ? (
              <Ctext color={colors.Red}>{showMessagePassword}</Ctext>
            ) : null}

            <Ctext
              onPress={onPressForgotPass}
              align={'right'}
              type={'R14'}
              color={colors.Primary}
              style={localStyles.ForgotPassTxtStyle}>
              {strings.ForgotPassword}
            </Ctext>

            <CButton
              onPress={onPressLogin}
              text={strings.LogIn}
              containerStyle={localStyles.LoginBtnStyle}
            />

            <View style={localStyles.mainOr}>
              <View
                style={[
                  localStyles.firstLine,
                  {backgroundColor: colors.BorderColor},
                ]}
              />
              <Ctext
                color={colors.contrast}
                type={'B14'}
                style={localStyles.orTxt}>
                {strings.Or}
              </Ctext>
              <View
                style={[
                  localStyles.firstLine,
                  {backgroundColor: colors.BorderColor},
                ]}
              />
            </View>

            <CommonComponent
              text={strings.ContinueWithGoogle}
              icon={images.Google}
            />

            <CommonComponent
              text={strings.ContinueWithApple}
              icon={images.Apple}
            />
          </View>
        </KeyBoardAvoidWrapper>

        <Ctext
          type={'B14'}
          color={colors.GrayScale3}
          align={'center'}
          style={localStyles.DoNotHaveAccount}>
          {strings.DoNotHaveAccount}

          <TouchableOpacity onPress={onPressSignUp}>
            <Ctext type={'B14'} color={colors.Primary}>
              {strings.SignUp}
            </Ctext>
          </TouchableOpacity>
        </Ctext>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  outerMainComponent: {
    ...styles.mh20,
    ...styles.flex,
    ...styles.justifyBetween,
  },
  ForgotPassTxtStyle: {
    ...styles.mv30,
  },
  LoginBtnStyle: {
    ...styles.mt5,
  },
  mainOr: {
    gap: moderateScale(10),
    ...styles.mv40,
    ...styles.center,
    ...styles.flexRow,
  },
  firstLine: {
    width: moderateScale(133),
    height: moderateScale(1),
  },
  googleStyle: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  outerContainerOfCommonComponent: {
    height: moderateScale(56),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    ...styles.mt20,
    ...styles.rowCenter,
    gap: moderateScale(10),
  },
  continueWithEmailBtn: {
    ...styles.mt30,
  },
  DoNotHaveAccount: {
    ...styles.mv20,
  },
});
