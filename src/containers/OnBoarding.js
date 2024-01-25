// Library import
import {SafeAreaView, StyleSheet, View, Image, FlatList} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {useSelector} from 'react-redux';

// Local imports
import Ctext from '../components/common/Ctext';
import strings from '../i18n/strings';
import {styles} from '../themes/index';
import {deviceWidth, moderateScale} from '../common/constant';
import {OnBoardingToken} from '../utils/asyncStorage';
import {OnBoardingData} from '../api/constants';
import CButton from '../components/common/CButton';
import {StackNav} from '../navigation/navigationKeys';

export default function OnBoarding({navigation}) {
  const colors = useSelector(state => state.theme.theme);
  const [OnBoardingDetails, setOnBoardingDetails] = useState(0);
  const BoardingRef = useRef(null);

  const _setViewableItemsChanged = useCallback(({viewableItems}) => {
    setOnBoardingDetails(viewableItems[0]?.index);
  }, []);

  const _viewabilityConfig = {itemVisiblePercentThreshold: 50};

  const onPressRightArrow = async () => {
    if (OnBoardingDetails === 1) {
      await OnBoardingToken(true);
      navigation.reset({
        index: 0,
        routes: [{name: StackNav.LetsGetStarted}],
      });
    } else {
      BoardingRef.current._listRef._scrollRef.scrollTo({
        x: deviceWidth * (OnBoardingDetails + 1),
      });
    }
  };

  const onPressLetsGetStarted = () => {
    navigation.reset({
      index: 0,
      routes: [{name: StackNav.LetsGetStarted}],
    });
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <CButton
          onPress={onPressLetsGetStarted}
          color={colors.contrast}
          text={strings.Skip}
          backgroundColor={colors.backgroundColor}
          containerStyle={localStyles.SkipButton}
        />
        <View style={localStyles.renderMainContainer}>
          <View style={localStyles.containerOfImage}>
            <Image source={item.image} style={localStyles.onBoarding1Style} />
          </View>

          <View style={localStyles.containerOfTitle}>
            <Ctext type={'B24'} align={'center'} color={colors.contrast}>
              {item.title}
            </Ctext>
            <Ctext type={'R14'} align={'center'} color={colors.GrayScale3}>
              {item.description}
            </Ctext>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={[localStyles.main, {backgroundColor: colors.backgroundColor}]}>
      <View style={localStyles.mainContainer}>
        <FlatList
          data={OnBoardingData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
          viewabilityConfig={_viewabilityConfig}
          ref={BoardingRef}
          pagingEnabled
          onViewableItemsChanged={_setViewableItemsChanged}
        />
        <View style={styles.rowCenter}>
          {OnBoardingData.map((item, index) => (
            <View
              style={[
                localStyles.IndicatorStyle,
                {
                  backgroundColor:
                    index !== OnBoardingDetails
                      ? colors.GrayScale
                      : colors.Primary,
                },
              ]}
            />
          ))}
        </View>

        <CButton text={strings.GetStarted} onPress={onPressRightArrow} />
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  main: {
    ...styles.flex,
  },
  mainContainer: {
    ...styles.ph20,
  },
  onBoarding1Style: {
    width: moderateScale(297),
    height: moderateScale(301),
  },
  containerOfImage: {
    alignItems: 'center',
    justifyContent: 'center',
    ...styles.mt80,
  },
  containerOfTitle: {
    ...styles.mv50,
    gap: moderateScale(10),
  },
  IndicatorStyle: {
    width: moderateScale(35),
    height: moderateScale(4),
    borderRadius: moderateScale(2),
    ...styles.mh5,
    ...styles.mv30,
  },
  renderMainContainer: {
    width: moderateScale(297),
    ...styles.ph20,
    ...styles.mh20,
  },
  SkipButton: {
    position: 'absolute',
    top: moderateScale(10),
    right: moderateScale(0),
    width: moderateScale(40),
    ...styles.mt0,
  },
});
