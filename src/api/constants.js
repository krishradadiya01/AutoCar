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

export const CategoriesData = [
  {
    id: 1,
    image: images.NewCar,
    title: strings.New,
  },
  {
    id: 2,
    image: images.UsedCar,
    title: strings.Used,
  },
  {
    id: 3,
    image: images.Brand,
    title: strings.Brand,
  },
  {
    id: 4,
    image: images.Other,
    title: strings.Other,
  },
];

export const RecommendationData = [
  {
    id: 1,
    image: images.WhiteCar,
    isLiked: false,
    label: strings.New,
    car: strings.Tesla,
    model: strings.ModelS,
    price: strings.TeslaDollars,
  },
  {
    id: 2,
    image: images.SilverCar,
    isLiked: false,
    label: strings.Used,
    car: strings.Tesla,
    model: strings.Model3,
    price: strings.TeslaDollars,
  },
  {
    id: 3,
    image: images.WhiteCar,
    isLiked: false,
    label: strings.New,
    car: strings.Tesla,
    model: strings.ModelS,
    price: strings.TeslaDollars,
  },
  {
    id: 4,
    image: images.BlackCar,
    isLiked: false,
    label: strings.New,
    car: strings.Tesla,
    model: strings.ModelS,
    price: strings.TeslaDollars,
  },
];
