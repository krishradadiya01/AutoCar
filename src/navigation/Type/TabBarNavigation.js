// Library imports
import React from 'react';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Local imports
import {TabNav} from '../navigationKeys';
import {TabRoute} from '../navigationRoute';
import {
  AddButton,
  DarkExplore,
  DarkHome,
  DarkMessage,
  DarkProfile,
  LightExplore,
  LightHome,
  LightMessage,
  LightProfile,
} from '../../assets/svgs';

const Tab = createBottomTabNavigator();

export default function TabBarNavigation() {
  const colors = useSelector(state => state.theme.theme);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={TabNav.HomeTab}
        component={TabRoute.HomeTab}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarActiveTintColor: colors.Primary,
          tabBarInactiveTintColor: colors.GrayScale3,
          tabBarIcon: ({focused}) => (focused ? <DarkHome /> : <LightHome />),
        }}
      />
      <Tab.Screen
        name={TabNav.ExploreTab}
        component={TabRoute.ExploreTab}
        options={{
          headerShown: false,
          tabBarLabel: 'Explore',
          tabBarActiveTintColor: colors.Primary,
          tabBarInactiveTintColor: colors.GrayScale3,
          tabBarIcon: ({focused}) =>
            focused ? <DarkExplore /> : <LightExplore />,
        }}
      />
      <Tab.Screen
        name={TabNav.AddCarTab}
        component={TabRoute.AddCarTab}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => <AddButton />,
        }}
      />
      <Tab.Screen
        name={TabNav.MessageTab}
        component={TabRoute.MessageTab}
        options={{
          headerShown: false,
          tabBarLabel: 'Message',
          tabBarActiveTintColor: colors.Primary,
          tabBarInactiveTintColor: colors.GrayScale3,
          tabBarIcon: ({focused}) =>
            focused ? <DarkMessage /> : <LightMessage />,
        }}
      />
      <Tab.Screen
        name={TabNav.ProfileTab}
        component={TabRoute.ProfileTab}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarActiveTintColor: colors.Primary,
          tabBarInactiveTintColor: colors.GrayScale3,
          tabBarIcon: ({focused}) =>
            focused ? <DarkProfile /> : <LightProfile />,
        }}
      />
    </Tab.Navigator>
  );
}
