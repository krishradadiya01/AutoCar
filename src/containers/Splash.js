// Library imports
import {StyleSheet, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';

// Local imports
import {styles} from '../themes';
import {color} from '../themes/color';
import images from '../assets/images';
import {moderateScale} from '../common/constant';
import {StackNav} from '../navigation/navigationKeys';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate(StackNav.OnBoarding);
    }, 1500);
  }, []);

  return (
    <SafeAreaView style={localStyles.ParentSplash}>
      <Image source={images.Splash} style={localStyles.SplashStyle} />
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  ParentSplash: {
    ...styles.flex,
    backgroundColor: color.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SplashStyle: {
    width: moderateScale(118),
    height: moderateScale(105),
  },
});

export default Splash;
