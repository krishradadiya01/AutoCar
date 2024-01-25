import Splash from '../containers/Splash';
import OnBoarding from '../containers/OnBoarding';
import AuthStack from './Type/AuthStack';
import StackNavigation from './Type/StackNavigation';
import TabBarNavigation from './Type/TabBarNavigation';
import LetsGetStarted from '../containers/LetsGetStarted';
import Login from '../containers/auth/Login';
import LoginSuccess from '../containers/auth/LoginSuccess';
import Register from '../containers/auth/Register';

export const StackRoute = {
  Splash,
  OnBoarding,
  AuthStack,
  StackNavigation,
  TabBarNavigation,
  LetsGetStarted,
};

export const AuthRoute = {
  Login,
  LoginSuccess,
  Register,
};
