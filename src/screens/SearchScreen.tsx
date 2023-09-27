import React, { useState } from 'react';
import { View, StyleSheet, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductCard from '../components/ProductCard';
import brandsData from '../assets/data/BrandsData';
import lifestyleData from '../assets/data/LifestyleData';
import storesData from '../assets/data/StoresData';
import { SearchScreenProps } from '../../App';

const SearchScreen = ({navigation}: SearchScreenProps): JSX.Element => {
  
  const [searchQuery, setSearchQuery] = useState('');

  const allData = [...brandsData, ...lifestyleData, ...storesData];
  const filteredData = allData.filter(brand => brand.storeName.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleProductDetailsPress = (item: any): void => {
    const storeName = item.storeName;
    navigation.navigate('Details', {storeName: storeName,});
  };
  
  return (
    <View style={{ flex: 1 }}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back-outline" size={30} color="black" style={{ marginTop: 2 }} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search for stores and restaurants"
        style={styles.searchBar}
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <Ionicons name='search-outline' size={30} color="black" style={{ marginTop: 2, marginLeft: 4 }} />
    </View>

    {searchQuery.length > 0 && filteredData.length > 0 ? (
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleProductDetailsPress(item)}>
          <ProductCard
            brandName={item.storeName}
            dealDescription={item.specialOffer}
            validityDate={item.validityDate}
            price={item.price}
            imageBackground={item.storeImage}
            logo={item.logoImage}
          />
          </TouchableOpacity>
        )}
      />
    ) : (
      <View style={styles.noResultsContainer}>
        <Text style={styles.noResultsText}>
          {searchQuery.length > 0 ? 'No matching results found.' : ''}
        </Text>
      </View>
    )}
  </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    height: 70,
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
    elevation: 5,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default SearchScreen;