// Library imports
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// Local imports
import images from '../assets/images';
import {moderateScale} from '../common/constant';
import Ctext from '../components/common/Ctext';
import strings from '../i18n/strings';
import CButton from '../components/common/CButton';
import {styles} from '../themes/index';
import {AuthNav, StackNav} from '../navigation/navigationKeys';
import {letsGetStarted} from '../utils/asyncStorage';

export default function LetsGetStarted() {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const onPressLogin = async () => {
    await letsGetStarted(true);
    navigation.navigate(StackNav.AuthStack);
  };

  const onPressRegister = () => {
    navigation.navigate(AuthNav.AuthStack, {
      screen: AuthNav.Register,
    });
  };

  const CommonComponent = ({text, icon}) => {
    return (
      <View>
        <TouchableOpacity style={localStyles.outerContainerOfCommonComponent}>
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
      <Image source={images.LetsGetStarted} style={localStyles.imageStyle} />

      <View style={localStyles.outerContainer}>
        <View style={localStyles.containerOfTitleAndDescription}>
          <Ctext type={'B24'} align={'center'} color={colors.contrast}>
            {strings.LetsGetStarted}
          </Ctext>
          <Ctext
            color={colors.contrast}
            type={'R14'}
            align={'center'}
            style={localStyles.DescriptionText}>
            {strings.LetsGetStartedDescription}
          </Ctext>
        </View>

        <CButton
          onPress={onPressLogin}
          containerStyle={localStyles.continueWithEmailBtn}
          color={colors.backgroundColor}
          text={strings.ContinueWithEmail}
        />
        <CommonComponent
          text={strings.ContinueWithGoogle}
          icon={images.Google}
        />
        <CommonComponent text={strings.ContinueWithApple} icon={images.Apple} />

        <View style={localStyles.outerComponentOfCtext}>
          <Ctext type={'R14'} align={'center'} color={colors.contrast}>
            {strings.DoNotHaveAccount}

            <TouchableOpacity onPress={onPressRegister}>
              <Ctext type={'B14'} color={colors.Primary}>
                {strings.SignUp}
              </Ctext>
            </TouchableOpacity>
          </Ctext>
        </View>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  outerContainer: {
    ...styles.mh20,
  },
  imageStyle: {
    width: moderateScale(375),
    height: moderateScale(365),
  },
  DescriptionText: {
    width: moderateScale(210),
    alignSelf: 'center',
  },
  containerOfTitleAndDescription: {
    gap: moderateScale(10),
  },
  outerContainerOfCommonComponent: {
    height: moderateScale(56),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    ...styles.center,
    ...styles.mt20,
    ...styles.rowCenter,
    gap: moderateScale(10),
  },
  continueWithEmailBtn: {
    ...styles.mt30,
  },
  outerComponentOfCtext: {
    ...styles.rowCenter,
    ...styles.mt35,
  },
});
