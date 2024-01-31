// Library imports
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

// Local imports
import CHeader from '../../components/common/CHeader';
import {useSelector} from 'react-redux';
import {styles} from '../../themes/index';
import strings from '../../i18n/strings';
import Ctext from '../../components/common/Ctext';
import {moderateScale} from '../../common/constant';
import {ForgotPasswordData} from '../../api/constants';
import CButton from '../../components/common/CButton';
import {AuthNav} from '../../navigation/navigationKeys';

export default function ForgotPassword({navigation}) {
  const colors = useSelector(state => state.theme.theme);
  const [changeColor, setChangeColor] = useState(ForgotPasswordData[0]);

  const onPressChangeColor = item => {
    setChangeColor(item);
  };

  const onPressResetPass = () => {
    if (changeColor.id === 1) {
      navigation.navigate(AuthNav.ResetPasswordEmail);
    } else {
      navigation.navigate(AuthNav.ResetPasswordPhone);
    }
  };

  const CommonComponent = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressChangeColor(item)}
        style={[
          localStyles.mainContainer,
          {
            borderColor:
              changeColor.id === item.id ? colors.Primary : colors.GrayScale3,
          },
        ]}>
        {changeColor.id === item.id ? (
          <Material
            name={'email-outline'}
            size={moderateScale(22)}
            color={colors.Primary}
            style={styles.ml15}
          />
        ) : (
          <Material
            name={'email-outline'}
            size={moderateScale(22)}
            color={colors.GrayScale3}
            style={styles.ml15}
          />
        )}

        <View style={localStyles.innerContainer}>
          <Ctext
            type={'B14'}
            color={colors.contrast}
            style={localStyles.EmailText}>
            {item.title}
          </Ctext>
          <Ctext style={localStyles.textStyle} color={colors.contrast}>
            {item.description}
          </Ctext>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundColor, flex: 1}}>
      <View style={localStyles.main}>
        <View>
          <CHeader
            title={strings.ForgotPass}
            description={strings.ForgotPassDescription}
          />

          <FlatList data={ForgotPasswordData} renderItem={CommonComponent} />
        </View>

        <CButton
          containerStyle={localStyles.buttonStyle}
          onPress={onPressResetPass}
        />
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.ph20,
    ...styles.flex,
    ...styles.justifyBetween,
  },
  mainContainer: {
    ...styles.mt30,
    ...styles.pv20,
    ...styles.flexRow,
    borderWidth: moderateScale(1),
    height: moderateScale(90),
    borderRadius: moderateScale(10),
  },
  innerContainer: {
    ...styles.justifyCenter,
    gap: moderateScale(6),
  },
  EmailText: {
    ...styles.ph20,
  },
  textStyle: {
    ...styles.pl20,
    width: moderateScale(250),
  },
  buttonStyle: {
    ...styles.mv20,
  },
});
