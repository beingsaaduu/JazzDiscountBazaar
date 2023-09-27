import { ImageSourcePropType } from 'react-native';

interface Brand {
  storeName: string;
  location: string;
  logoImage: ImageSourcePropType;
  storeImage: ImageSourcePropType;
  price: string;
  specialOffer: string;
  validityDate: string;
}

const brandsData: Brand[] = [
  {
    storeName: 'Adelante Steak House',
    location: 'Bahria Town',
    //C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/adelanteSteakHouseLogo.jpeg
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/adelanteSteakHouseLogo.jpeg'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/adelanteSteakHouseFood.jpeg'),
    price: '850',
    specialOffer: 'Buy One Any Chicken Burger & Get One Free',
    validityDate: '2023-12-31',
  },
  {
    storeName: '14th Street Pizza',
    location: 'F-7 Markaz',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/14StreetPizzaLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/14StreetPizzaFood.jpeg'),
    price: '120',
    specialOffer: 'Buy One Large Pizza & Get a Drink Free',
    validityDate: '2023-12-30',
  },
  {
    storeName: 'Broadway Pizza',
    location: 'Centauras Mall',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/broadWayPizzaLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/broadWayPizzaFood.jpeg'),
    price: '350',
    specialOffer: '20% off on all pasta dishes',
    validityDate: '2023-12-29',
  },
  {
    storeName: 'Dunkin Donuts',
    location: 'F-10 Markaz',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/dunkinDonutsLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/dunkinDonutsFood.jpeg'),
    price: '400',
    specialOffer: 'Buy 6 donuts and get 2 free',
    validityDate: '2023-12-28',
  },
  {
    storeName: 'Pizza Hut',
    location: 'F-10 Markaz',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/pizzaHutLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/pizzaHutFood.jpeg'),
    price: '200',
    specialOffer: 'Large pizza + garlic bread combo',
    validityDate: '2023-12-27',
  },
  {
    storeName: 'Dominoes',
    location: 'G-11 Markaz',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/dominoesLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/dominoesFood.jpeg'),
    price: '1500',
    specialOffer: 'Buy One Get One Free on Medium Pizzas',
    validityDate: '2023-12-26',
  },
  {
    storeName: 'Subway',
    location: 'Centauras Mall',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/subwayLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/subwayFood.jpeg'),
    price: '450',
    specialOffer: 'Buy One Footlong Sandwich, Get One 6\' Sandwich Free',
    validityDate: '2023-12-25',
  },
];

export default brandsData;
