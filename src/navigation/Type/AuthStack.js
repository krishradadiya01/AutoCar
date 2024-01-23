import React from 'react';

// Local imports
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNav} from '../navigationKeys';
import {AuthRoute} from '../navigationRoute';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AuthNav.Login}
        component={AuthRoute.Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
