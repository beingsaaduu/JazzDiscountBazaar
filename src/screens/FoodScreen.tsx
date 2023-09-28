import React from 'react'
import HeaderBar from '../components/HeaderBar';
import { View, StyleSheet, FlatList, TouchableOpacity, ScrollView, ImageSourcePropType } from 'react-native'
import ProductCard from '../components/ProductCard';
import brandsData from '../assets/data/BrandsData';
import { FoodScreenProps, SearchScreenProps } from '../../App';

type productItem = {
  storeName: string;
  location: string;
  logoImage: ImageSourcePropType;
  storeImage: ImageSourcePropType;
  specialOffer: string;
  validityDate: string;
  price: string;
}

const FoodScreen = ({navigation}: SearchScreenProps):JSX.Element => {
  const handleProductDetailsPress = (item: productItem): void => {
    const storeName = item.storeName;
    navigation.navigate('Details', {storeName: storeName,});
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <HeaderBar navigation={navigation}/>
      <ScrollView style={styles.mainContainer}>
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
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

export default FoodScreen