// Library imports
import {StyleSheet, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

// Local Imports
import CHeader from '../../components/common/CHeader';
import images from '../../assets/images';
import {moderateScale} from '../../common/constant';
import {styles} from '../../themes/index';
import Ctext from '../../components/common/Ctext';
import strings from '../../i18n/strings';
import CButton from '../../components/common/CButton';

export default function ResetLink({route}) {
  const email = route?.params?.email;
  const colors = useSelector(state => state.theme.theme);

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundColor, flex: 1}}>
      <View style={localStyles.main}>
        <CHeader />
        <View>
          <Image source={images.ResetLink} style={localStyles.imgStyle} />

          <View style={localStyles.titleStyle}>
            <Ctext align={'center'} type={'B24'} color={colors.contrast}>
              {strings.AlmostDone}
            </Ctext>

            <Ctext align={'center'} type={'R14'} color={colors.GrayScale3}>
              {strings.EmailSent}
              <Ctext color={colors.contrast}>{email}</Ctext>
              <Ctext>{strings.PleaseCheck}</Ctext>
            </Ctext>
          </View>
        </View>

        <CButton
          text={strings.Resend}
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
  mainImageStyle: {
    ...styles.center,
  },
  titleStyle: {
    ...styles.mv25,
    gap: moderateScale(15),
  },
  buttonStyle: {
    ...styles.mv25,
  },
});
