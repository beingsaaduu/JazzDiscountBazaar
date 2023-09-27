import React from 'react';
import { View, StyleSheet, FlatList, ScrollView, TouchableOpacity, ImageSourcePropType } from 'react-native';
import ProductCard from '../components/ProductCard';
import HeaderBar from '../components/HeaderBar';
import storesData from '../assets/data/StoresData';
import {StoresScreenProps} from '../../App'; 

type productItem = {
  storeName: string;
  location: string;
  logoImage: ImageSourcePropType;
  storeImage: ImageSourcePropType;
  specialOffer: string;
  validityDate: string;
  price: string;
}

const StoresScreen = ({navigation}: StoresScreenProps): JSX.Element => {
  const handleProductDetailsPress = (item: productItem) => {
    const storeName = item.storeName;
    navigation.navigate('Details', {storeName: storeName,});
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <HeaderBar navigation={navigation}/>
      <ScrollView style={styles.mainContainer}>
      <FlatList
            data={storesData}
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
export default StoresScreen