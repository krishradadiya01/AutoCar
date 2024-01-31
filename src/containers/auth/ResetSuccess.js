// Library imports
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

// Local imports
import {moderateScale} from '../../common/constant';
import {styles} from '../../themes/index';
import images from '../../assets/images';
import Ctext from '../../components/common/Ctext';
import strings from '../../i18n/strings';
import CButton from '../../components/common/CButton';
import {AuthNav} from '../../navigation/navigationKeys';

export default function ResetSuccess({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  const onPressLogIn = () => {
    navigation.navigate(AuthNav.Login);
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundColor, flex: 1}}>
      <View style={localStyles.main}>
        <TouchableOpacity onPress={onPressLogIn}>
          <AntDesign
            style={styles.mv10}
            name={'close'}
            size={moderateScale(24)}
            color={colors.contrast}
          />
        </TouchableOpacity>

        <View>
          <Image source={images.ResetSuccess} style={localStyles.imgStyle} />

          <View style={localStyles.innerContainer}>
            <Ctext type={'B24'} align={'center'}>
              {strings.PasswordChanged}
            </Ctext>
            <Ctext type={'R14'} align={'center'}>
              {strings.DoNotWorry}
            </Ctext>
          </View>
        </View>

        <CButton
          onPress={onPressLogIn}
          text={strings.BackToLogin}
          containerStyle={localStyles.buttonStyle}
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
  imgStyle: {
    width: moderateScale(136),
    height: moderateScale(136),
    alignSelf: 'center',
  },
  buttonStyle: {
    ...styles.mv25,
  },
  innerContainer: {
    ...styles.mt40,
    gap: moderateScale(10),
  },
});
