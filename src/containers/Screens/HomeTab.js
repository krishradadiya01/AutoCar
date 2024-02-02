// Library imports
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../themes/index';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Local imports
import Ctext from '../../components/common/Ctext';
import strings from '../../i18n/strings';
import {moderateScale} from '../../common/constant';
import {Like, Notification, Unlike} from '../../assets/svgs';
import CTextInput from '../../components/common/CTextInput';
import images from '../../assets/images';
import {CategoriesData, RecommendationData} from '../../api/constants';

export default function HomeTab() {
  const colors = useSelector(state => state.theme.theme);

  const [isLiked, setIsLiked] = useState(false);

  const onPressLike = item => {
    setIsLiked(item.id === isLiked ? false : item.id);
  };

  const RenderCategoriesData = ({item}) => {
    return (
      <TouchableOpacity style={localStyles.mainStyle}>
        <View
          style={[
            localStyles.mainImgStyle,
            {backgroundColor: colors.PrimaryLight},
          ]}>
          <Image source={item.image} style={localStyles.iconStyle} />
        </View>

        <Ctext type={'R14'} color={colors.GrayScale3}>
          {item.title}
        </Ctext>
      </TouchableOpacity>
    );
  };

  const renderCarData = ({item}) => {
    return (
      <View>
        <View style={localStyles.mainContainerStyle}>
          <Image source={item.image} style={localStyles.carStyle} />
        </View>

        <Ctext
          align={'center'}
          type={'S12'}
          color={colors.Primary}
          style={[
            localStyles.labelText,
            {backgroundColor: colors.PrimaryLight},
          ]}>
          {item.label}
        </Ctext>

        <TouchableOpacity onPress={() => onPressLike(item)}>
          {isLiked === item.id ? (
            <Like style={localStyles.heartStyle} />
          ) : (
            <Unlike style={localStyles.heartStyle} />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundColor, flex: 1}}>
      <ScrollView style={localStyles.main}>
        <TouchableOpacity style={localStyles.mainLocationStyle}>
          <Ctext type={'R12'} color={colors.GrayScale3}>
            {strings.Location}
          </Ctext>
          <Feather name={'chevron-down'} size={22} />
        </TouchableOpacity>

        <Notification style={localStyles.notificationStyle} />

        <View style={localStyles.jakartaIndonesiaStyle}>
          <Ionicons
            name={'location-outline'}
            size={28}
            color={colors.Primary}
          />
          <Ctext type={'B16'}>{strings.JakartaIndonesia}</Ctext>
        </View>

        <CTextInput
          text={strings.SearchSomething}
          mainTxtInp={{borderColor: colors.BorderColor}}
          textInputStyle={localStyles.textInputStyle}
          RightIcon={() => (
            <View style={styles.ph15}>
              <AntDesign name={'search1'} size={24} color={colors.GrayScale3} />
            </View>
          )}
        />

        <Image source={images.Car1} style={localStyles.imageStyle} />

        <View>
          <Ctext
            type={'B20'}
            color={colors.backgroundColor}
            style={localStyles.bestCarStyle}>
            {strings.TheBestCar}
          </Ctext>
          <Ctext
            type={'S12'}
            color={colors.backgroundColor}
            style={localStyles.bestCarDesStyle}>
            {strings.TheBestCarDescription}
          </Ctext>

          <TouchableOpacity
            style={[
              localStyles.readMoreStyle,
              {backgroundColor: colors.Primary},
            ]}>
            <Ctext type={'B12'} color={colors.backgroundColor}>
              {strings.ReadMore}
            </Ctext>
          </TouchableOpacity>
        </View>

        <Ctext
          type={'B16'}
          color={colors.contrast}
          style={localStyles.categoryStyle}>
          {strings.Category}
        </Ctext>

        <FlatList
          data={CategoriesData}
          renderItem={RenderCategoriesData}
          horizontal
        />

        <Ctext type={'B16'} color={colors.contrast}>
          {strings.Recommendation}
        </Ctext>

        <FlatList
          data={RecommendationData}
          renderItem={renderCarData}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.mh20,
  },
  mainLocationStyle: {
    ...styles.mt10,
    ...styles.flexRow,
    ...styles.alignCenter,
    gap: moderateScale(8),
  },
  jakartaIndonesiaStyle: {
    ...styles.flexRow,
    ...styles.alignCenter,
    ...styles.mt10,
  },
  notificationStyle: {
    position: 'absolute',
    right: 0,
    top: moderateScale(23),
  },
  imageStyle: {
    width: moderateScale(327),
    height: moderateScale(176),
    alignSelf: 'center',
    ...styles.mt25,
  },
  bestCarStyle: {
    position: 'absolute',
    bottom: moderateScale(120),
    left: moderateScale(30),
  },
  bestCarDesStyle: {
    position: 'absolute',
    bottom: moderateScale(80),
    left: moderateScale(30),
    width: moderateScale(135),
  },
  readMoreStyle: {
    position: 'absolute',
    bottom: moderateScale(25),
    left: moderateScale(30),
    width: moderateScale(104),
    height: moderateScale(36),
    ...styles.center,
    borderRadius: moderateScale(12),
  },
  categoryStyle: {
    ...styles.mt20,
  },
  iconStyle: {
    width: moderateScale(31),
    height: moderateScale(31),
  },
  mainImgStyle: {
    ...styles.center,
    width: moderateScale(56),
    height: moderateScale(56),
    borderRadius: moderateScale(12),
  },
  mainStyle: {
    ...styles.center,
    ...styles.mv25,
    ...styles.ph15,
  },
  carStyle: {
    width: moderateScale(152),
    height: moderateScale(66),
  },
  mainContainerStyle: {
    width: moderateScale(241),
    height: moderateScale(174),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(12),
    ...styles.center,
  },
  labelText: {
    ...styles.pv3point5,
    position: 'absolute',
    bottom: moderateScale(130),
    left: moderateScale(20),
    width: moderateScale(55),
    height: moderateScale(24),
    borderRadius: moderateScale(12),
  },
  heartStyle: {
    position: 'absolute',
    bottom: moderateScale(130),
    right: moderateScale(0),
    ...styles.mr15,
  },
});
