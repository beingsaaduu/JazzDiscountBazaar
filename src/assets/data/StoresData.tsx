import { ImageSourcePropType } from 'react-native';

interface StoreItem {
  storeName: string;
  location: string;
  logoImage: ImageSourcePropType;
  storeImage: ImageSourcePropType;
  specialOffer: string;
  validityDate: string;
  price: string;
}

const storesData: StoreItem[] = [
  {
    storeName: 'Gap',
    location: 'Karachi',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/gapLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/gapStore.jpeg'),
    specialOffer: 'Buy 2 Get 1 Free on all apparel',
    validityDate: '2023-12-31',
    price: '3400',
  },
  {
    storeName: 'Banana Republic',
    location: 'Lahore',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/bananaRepublicLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/bananaRepublicStore.jpeg'),
    specialOffer: '30% off on all new arrivals',
    validityDate: '2023-12-30',
    price: '4300',
  },
  {
    storeName: 'Apple',
    location: 'Islamabad',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/appleLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/appleStore.jpeg'),
    specialOffer: 'Buy an iPhone, get 50% off on AirPods',
    validityDate: '2023-12-29',
    price: '11000',
  },
  {
    storeName: 'Samsung',
    location: 'Faisalabad',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/samsungLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/samsungStore.jpeg'),
    specialOffer: 'Free Galaxy Watch with any smartphone purchase',
    validityDate: '2023-12-28',
    price: '25000',
  },
  {
    storeName: 'Kroger',
    location: 'Karachi',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/krogerLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/krogerStore.jpeg'),
    specialOffer: '10% off on all groceries',
    validityDate: '2023-12-27',
    price: '3400',
  },
  {
    storeName: 'Walmart',
    location: 'Lahore',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/walmartLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/walmartStore.jpeg'),
    specialOffer: 'Special discounts on electronics and apparel',
    validityDate: '2023-12-26',
    price: '5000',
  },
  {
    storeName: 'HP',
    location: 'Islamabad',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/hpLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/hpStore.jpeg'),
    specialOffer: 'Buy an HP laptop, get a free printer',
    validityDate: '2023-12-25',
    price: '25000',
  },
];

export default storesData;
