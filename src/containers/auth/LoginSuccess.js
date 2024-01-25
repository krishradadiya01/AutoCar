// Library imports
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Local imports
import {moderateScale} from '../../common/constant';
import {useSelector} from 'react-redux';
import {styles} from '../../themes/index';
import images from '../../assets/images';
import Ctext from '../../components/common/Ctext';
import strings from '../../i18n/strings';
import CButton from '../../components/common/CButton';
import {StackNav} from '../../navigation/navigationKeys';
import {authToken} from '../../utils/asyncStorage';

export default function LoginSuccess({navigation}) {
  const colors = useSelector(state => state.theme.theme);

  const onPressHome = async () => {
    await authToken(true);
    navigation.reset({
      index: 0,
      routes: [{name: StackNav.TabBarNavigation}],
    });
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundColor, flex: 1}}>
      <View style={localStyles.main}>
        <View>
          <TouchableOpacity onPress={onPressHome}>
            <AntDesign
              style={styles.mv10}
              name={'close'}
              size={moderateScale(24)}
              color={colors.contrast}
            />
          </TouchableOpacity>

          <View style={localStyles.imageAndTextMainContainer}>
            <Image source={images.Success} style={localStyles.imageStyle} />

            <View style={{gap: moderateScale(13)}}>
              <Ctext type={'B24'} align={'center'} color={colors.contrast}>
                {strings.WelcomeBack}
              </Ctext>
              <Ctext type={'center'} color={colors.contrast}>
                {strings.WelcomeBackDescription}
              </Ctext>
            </View>
          </View>
        </View>

        <CButton
          onPress={onPressHome}
          text={strings.GoToHome}
          containerStyle={localStyles.ButtonStyle}
        />
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.m20,
    ...styles.flex,
    ...styles.justifyBetween,
  },
  imageStyle: {
    width: moderateScale(136),
    height: moderateScale(136),
  },
  imageAndTextMainContainer: {
    ...styles.alignCenter,
    gap: moderateScale(40),
    ...styles.mt100,
  },
  ButtonStyle: {
    ...styles.mv10,
  },
});
