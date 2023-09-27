import { ImageSourcePropType } from 'react-native';

interface LifestyleItem {
  storeName: string;
  location: string;
  logoImage: ImageSourcePropType;
  storeImage: ImageSourcePropType;
  specialOffer: string;
  validityDate: string;
  price: string;
}

const lifestyleData: LifestyleItem[] = [
  {
    storeName: 'Pharmacy Plus',
    location: 'Karachi',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/pharmacyPlusLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/pharmacyPlusStore.jpeg'),
    specialOffer: '15% off on all medical products',
    validityDate: '2023-12-31',
    price: 'N/A',
  },
  {
    storeName: 'Dental Care Clinic',
    location: 'Lahore',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/dentalCareLogo.jpeg'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/dentalCareClinic.jpeg'),
    specialOffer: '50% off on dental check-up and cleaning',
    validityDate: '2023-12-30',
    price: 'N/A',
  },
  {
    storeName: 'City View Apartments',
    location: 'Islamabad',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/cityViewApartmentsLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/cityViewApartments.jpeg'),
    specialOffer: 'Get 20% off on monthly rent',
    validityDate: '2023-12-29',
    price: 'N/A',
  },
  {
    storeName: 'Skin Bliss Laser Clinic',
    location: 'Faisalabad',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/skinBlissLogo.jpeg'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/skinBlissClinic.jpeg'),
    specialOffer: 'Hydrafacial at 30% discounted price',
    validityDate: '2023-12-28',
    price: '1500',
  },
  {
    storeName: 'MediCure Pharmacy',
    location: 'Multan',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/medicurePharmacyLogo.jpeg'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/medicurePharmacyStore.jpeg'),
    specialOffer: '10% off on all prescriptions',
    validityDate: '2023-12-27',
    price: 'N/A',
  },
  {
    storeName: 'Smile Bright Dental Clinic',
    location: 'Karachi',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/smileBrightLogo.png'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/smileBrightClinic.jpeg'),
    specialOffer: 'Free teeth whitening with any dental procedure',
    validityDate: '2023-12-26',
    price: 'N/A',
  },
  {
    storeName: 'Laser Beauty Clinic',
    location: 'Lahore',
    logoImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/laserBeautyLogo.jpeg'),
    storeImage: require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/laserBeautyClinic.jpeg'),
    specialOffer: '50% off on hydrafacial treatment',
    validityDate: '2023-12-25',
    price: '1200',
  },
];

export default lifestyleData;
