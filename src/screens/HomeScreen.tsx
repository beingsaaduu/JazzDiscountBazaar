import React from 'react'
import HeaderBar from '../components/HeaderBar'
import FeaturedBrands from '../components/FeaturedBrands';
import ProductCard from '../components/ProductCard';
import brandsData from '../assets/data/BrandsData';
import { ProfileScreenProps } from '../../App';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';

type productItem = {
  storeName: string;
  location: string;
  logoImage: ImageSourcePropType;
  storeImage: ImageSourcePropType;
  specialOffer: string;
  validityDate: string;
  price: string;
}

const HomeScreen = ({navigation}: ProfileScreenProps): JSX.Element => {
  const handleProductDetailsPress = (item: productItem): void => {
    const storeName = item.storeName;
    navigation.navigate('Details', {storeName: storeName,});
  };
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
    <HeaderBar navigation={navigation} />
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.subheading}>Featured Brands</Text>
      <View>
        <FlatList
          horizontal
          data={brandsData}
          renderItem={({ item }) => (
            <FeaturedBrands name={item.storeName} src={item.logoImage} />
          )}
        />
      </View>
      <Image
        source={require('../assets/images/loginPromo.jpg')}
        style={styles.loginPromo}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 20,
          marginBottom: 15,
        }}>
        <Text style={{ fontSize: 18, color: 'black' }}>Food Deals</Text>
        <Text style={{ fontSize: 18, color: 'black' }}>Online Stores</Text>
        <Text style={{ fontSize: 18, color: 'black' }}>Life Style</Text>
      </View>
      <View>
        <FlatList
          data={brandsData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleProductDetailsPress(item)}>
              <ProductCard
                imageBackground={item.storeImage}
                brandName={item.storeName}
                logo={item.logoImage}
                validityDate={item.validityDate}
                price={item.price}
                dealDescription={item.specialOffer}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  subheading: {
    fontSize: 20,
    color: 'black',
  },
  loginPromo: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
  },
});

export default HomeScreen;