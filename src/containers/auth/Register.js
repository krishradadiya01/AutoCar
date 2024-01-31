// Library imports
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Local Imports
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import {styles} from '../../themes/index';
import CTextInput from '../../components/common/CTextInput';
import {moderateScale} from '../../common/constant';
import CButton from '../../components/common/CButton';
import Ctext from '../../components/common/Ctext';
import images from '../../assets/images';
import {AuthNav} from '../../navigation/navigationKeys';
import {
  validateEmail,
  validateName,
  validatePassword,
} from '../../utils/validators';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';

export default function Register({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  const BlurredStyle = {
    borderColor: colors.BorderColor,
  };
  const FocusedStyle = {
    borderColor: colors.Primary,
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showMessageName, setShowMessageName] = useState(false);
  const [showMessageEmail, setShowMessageEmail] = useState(false);
  const [showMessagePassword, setShowMessagePassword] = useState(false);

  const [nameInputStyle, setNameInputStyle] = useState(BlurredStyle);
  const [emailInputStyle, setEmailInputStyle] = useState(BlurredStyle);
  const [passwordInputStyle, setPasswordInputStyle] = useState(BlurredStyle);

  const onFocusInput = onHighlight => onHighlight(FocusedStyle);
  const onBlurInput = onUnHighlight => onUnHighlight(BlurredStyle);

  const onFocusName = () => {
    onFocusInput(setNameInputStyle);
  };

  const onBlurName = () => {
    onBlurInput(setNameInputStyle);
  };

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

  const onPressRegister = async () => {
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      showMessageName ||
      showMessageEmail ||
      showMessagePassword
    ) {
      Alert.alert(strings.PleaseFill);
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: AuthNav.SignUpSuccess}],
      });
    }
  };

  const onPressChangeName = txt => {
    const {msg} = validateName(txt);
    setName(txt);
    setShowMessageName(msg);
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

  const onPressLogIn = () => {
    navigation.navigate(AuthNav.Login);
  };

  const CommonComponent = ({text, icon}) => {
    return (
      <View>
        <TouchableOpacity
          style={[
            localStyles.commonComponentStyle,
            {borderColor: colors.BorderColor},
          ]}>
          <Image
            source={icon}
            style={{
              width: moderateScale(24),
              height: moderateScale(24),
            }}
          />
          <Ctext type={'B14'} color={colors.contrast} align={'center'}>
            {text}
          </Ctext>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundColor, flex: 1}}>
      <View style={localStyles.main}>
        <KeyBoardAvoidWrapper>
          <View>
            <CHeader
              title={strings.CreateAcc}
              description={strings.SignUpAndStarted}
            />

            <CTextInput
              mainTxtInp={nameInputStyle}
              onFocus={onFocusName}
              onBlur={onBlurName}
              value={name}
              onChangeText={onPressChangeName}
              text={strings.Name}
              color={colors.GrayScale3}
              LeftIcon={() => (
                <FontAwesome
                  name={'user-o'}
                  size={moderateScale(22)}
                  color={colors.GrayScale3}
                  style={styles.ml15}
                />
              )}
            />

            {showMessageName ? (
              <Ctext color={colors.Red}>{showMessageName}</Ctext>
            ) : null}

            <CTextInput
              mainTxtInp={emailInputStyle}
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

            <CButton onPress={onPressRegister} text={strings.SignUp} />

            <View style={localStyles.orLine}>
              <View
                style={[
                  localStyles.borderLine,
                  {backgroundColor: colors.BorderColor},
                ]}
              />
              <Ctext
                color={colors.GrayScale3}
                type={'B14'}
                style={localStyles.orTxt}>
                {strings.Or}
              </Ctext>
              <View
                style={[
                  localStyles.borderLine,
                  {backgroundColor: colors.BorderColor},
                ]}
              />
            </View>

            <View style={{gap: moderateScale(20)}}>
              <CommonComponent
                text={strings.ContinueWithGoogle}
                icon={images.Google}
              />

              <CommonComponent
                text={strings.ContinueWithApple}
                icon={images.Apple}
              />
            </View>
          </View>
        </KeyBoardAvoidWrapper>

        <Ctext
          style={localStyles.AlreadyAccStyle}
          type={'R14'}
          align={'center'}
          color={colors.contrast}>
          {strings.AlreadyHaveAcc}

          <TouchableOpacity onPress={onPressLogIn}>
            <Ctext type={'B14'} color={colors.Primary}>
              {strings.Login}
            </Ctext>
          </TouchableOpacity>
        </Ctext>
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
  orLine: {
    ...styles.mv30,
    gap: moderateScale(10),
    ...styles.flexRow,
    ...styles.center,
  },
  borderLine: {
    width: moderateScale(133),
    height: moderateScale(1),
  },
  commonComponentStyle: {
    ...styles.rowCenter,
    height: moderateScale(56),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    gap: moderateScale(10),
  },
  AlreadyAccStyle: {
    ...styles.mb15,
  },
});
