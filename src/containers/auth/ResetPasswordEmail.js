// Library imports
import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

// Local imports
import CHeader from '../../components/common/CHeader';
import strings from '../../i18n/strings';
import {styles} from '../../themes/index';
import CTextInput from '../../components/common/CTextInput';
import {moderateScale} from '../../common/constant';
import CButton from '../../components/common/CButton';
import KeyBoardAvoidWrapper from '../../components/common/KeyBoardAvoidWrapper';
import {AuthNav} from '../../navigation/navigationKeys';
import {validateEmail} from '../../utils/validators';
import Ctext from '../../components/common/Ctext';

export default function ResetPassword({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  const BlurredStyle = {
    borderColor: colors.BorderColor,
  };
  const FocusedStyle = {
    borderColor: colors.Primary,
  };

  const [email, setEmail] = React.useState('');
  const [showMessageEmail, setShowMessageEmail] = useState(false);

  const [emailInputStyle, setEmailInputStyle] = useState(BlurredStyle);

  const onFocusInput = onHighlight => onHighlight(FocusedStyle);
  const onBlurInput = onUnHighlight => onUnHighlight(BlurredStyle);

  const onFocusEmail = () => {
    onFocusInput(setEmailInputStyle);
  };

  const onBlurEmail = () => {
    onBlurInput(setEmailInputStyle);
  };

  const onPressChangeEmail = text => {
    const {msg} = validateEmail(text);
    setShowMessageEmail(msg);
    setEmail(text);
  };

  const onPressReset = () => {
    if (email === '' || showMessageEmail) {
      Alert.alert(strings.PleaseFillEmail);
    } else {
      navigation.navigate(AuthNav.ResetLink, {email: email});
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundColor, flex: 1}}>
      <View style={localStyles.main}>
        <KeyBoardAvoidWrapper>
          <View>
            <CHeader
              title={strings.ResetPass}
              description={strings.ResetPassDescription}
            />

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
          </View>
        </KeyBoardAvoidWrapper>

        <CButton
          containerStyle={localStyles.buttonStyle}
          onPress={onPressReset}
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
  buttonStyle: {
    ...styles.mv25,
  },
});
