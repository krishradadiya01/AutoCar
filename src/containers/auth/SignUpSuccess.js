// Library imports
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Local imports
import {moderateScale} from '../../common/constant';
import {styles} from '../../themes/index';
import images from '../../assets/images';
import Ctext from '../../components/common/Ctext';
import strings from '../../i18n/strings';
import CButton from '../../components/common/CButton';
import {AuthNav} from '../../navigation/navigationKeys';

export default function SignUpSuccess({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  const onPressBackToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{name: AuthNav.Login}],
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundColor, flex: 1}}>
      <View style={localStyles.main}>
        <View>
          <TouchableOpacity>
            <AntDesign
              style={styles.mv10}
              name={'close'}
              size={moderateScale(24)}
              color={colors.contrast}
            />
          </TouchableOpacity>
        </View>

        <View style={localStyles.mainImageStyle}>
          <Image source={images.SignUpSuccess} style={localStyles.imageStyle} />
          <Ctext
            type={'B24'}
            color={colors.contrast}
            style={localStyles.titleStyle}>
            {strings.SuccessRegister}
          </Ctext>

          <Ctext align={'center'} type={'R14'} color={colors.DescColor}>
            {strings.SuccessRegisterDescription}
          </Ctext>
        </View>

        <CButton
          text={strings.BackToLogin}
          containerStyle={localStyles.ButtonStyle}
          onPress={onPressBackToLogin}
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
  imageStyle: {
    width: moderateScale(136),
    height: moderateScale(136),
  },
  mainImageStyle: {
    ...styles.alignCenter,
    gap: moderateScale(13),
  },
  titleStyle: {
    ...styles.mt30,
  },
  ButtonStyle: {
    ...styles.mv25,
  },
});
