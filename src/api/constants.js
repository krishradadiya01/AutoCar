import images from '../assets/images';
import strings from '../i18n/strings';

export const OnBoardingData = [
  {
    image: images.OnBoarding1,
    title: strings.FindDreamCar,
    description: strings.FindDreamCarDescription,
  },
  {
    image: images.OnBoarding2,
    title: strings.SellYourCar,
    description: strings.SellYourCarDescription,
  },
];

export const ForgotPasswordData = [
  {
    id: 1,
    title: strings.Email,
    description: strings.EnterEmail,
  },
  {
    id: 2,
    title: strings.Phone,
    description: strings.EnterPhone,
  },
];
