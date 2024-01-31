import Splash from '../containers/Splash';
import OnBoarding from '../containers/OnBoarding';
import AuthStack from './Type/AuthStack';
import StackNavigation from './Type/StackNavigation';
import TabBarNavigation from './Type/TabBarNavigation';
import LetsGetStarted from '../containers/LetsGetStarted';
import Login from '../containers/auth/Login';
import LoginSuccess from '../containers/auth/LoginSuccess';
import Register from '../containers/auth/Register';
import SignUpSuccess from '../containers/auth/SignUpSuccess';
import ForgotPassword from '../containers/auth/ForgotPassword';
import ResetPasswordEmail from '../containers/auth/ResetPasswordEmail';
import ResetLink from '../containers/auth/ResetLink';
import ResetPasswordPhone from '../containers/auth/ResetPasswordPhone';
import CreateNewPassword from '../containers/auth/CreateNewPassword';
import VerificationCode from '../containers/auth/VerificationCode';
import ResetSuccess from '../containers/auth/ResetSuccess';
import HomeTab from '../containers/Screens/HomeTab';
import ExploreTab from '../containers/Screens/ExploreTab';
import AddCarTab from '../containers/Screens/AddCarTab';
import MessageTab from '../containers/Screens/MessageTab';
import ProfileTab from '../containers/Screens/ProfileTab';

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
  SignUpSuccess,
  ForgotPassword,
  ResetPasswordEmail,
  ResetLink,
  ResetPasswordPhone,
  VerificationCode,
  CreateNewPassword,
  ResetSuccess,
};

export const TabRoute = {
  HomeTab,
  ExploreTab,
  AddCarTab,
  MessageTab,
  ProfileTab,
};
