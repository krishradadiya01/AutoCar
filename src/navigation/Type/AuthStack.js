// Library imports
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
      <Stack.Screen
        name={AuthNav.Register}
        component={AuthRoute.Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.LoginSuccess}
        component={AuthRoute.LoginSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.SignUpSuccess}
        component={AuthRoute.SignUpSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.ForgotPassword}
        component={AuthRoute.ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.ResetPasswordEmail}
        component={AuthRoute.ResetPasswordEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.ResetPasswordPhone}
        component={AuthRoute.ResetPasswordPhone}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.ResetLink}
        component={AuthRoute.ResetLink}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.VerificationCode}
        component={AuthRoute.VerificationCode}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.CreateNewPassword}
        component={AuthRoute.CreateNewPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={AuthNav.ResetSuccess}
        component={AuthRoute.ResetSuccess}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
