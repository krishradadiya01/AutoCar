// Library imports
import {StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

// Local imports
import {styles} from '../themes';
import {moderateScale} from '../common/constant';
import {StackNav} from '../navigation/navigationKeys';
import {StorageValue} from '../utils/asyncStorage';
import SplashScreen from 'react-native-splash-screen';
import images from '../assets/images';

const Splash = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);

  useEffect(() => {
    SplashScreen.hide();
    asyncProcess();
  }, []);

  const asyncProcess = async () => {
    try {
      let Data = await StorageValue();
      if (Data) {
        console.log('Data', Data);
        let {OnBoardingDataValue, authDataValue, letsGetStarted} = Data;
        if (!!authDataValue) {
          navigation.replace(StackNav.TabBarNavigation);
        } else if (!!OnBoardingDataValue) {
          if (!!letsGetStarted) {
            return navigation.replace(StackNav.AuthStack);
          } else {
            return navigation.replace(StackNav.LetsGetStarted);
          }
        } else {
          navigation.replace(StackNav.OnBoarding);
        }
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  return (
    <SafeAreaView
      style={[localStyles.ParentSplash, {backgroundColor: colors.Primary}]}>
      <Image source={images.Splash} style={localStyles.SplashStyle} />
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  ParentSplash: {
    ...styles.flex,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SplashStyle: {
    width: moderateScale(118),
    height: moderateScale(105),
  },
});

export default Splash;
