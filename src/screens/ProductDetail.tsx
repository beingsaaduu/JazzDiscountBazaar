import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import brandsData from '../assets/data/BrandsData';
import lifestyleData from '../assets/data/LifestyleData';
import storesData from '../assets/data/StoresData';
import { DetailsScreenProps } from '../../App';

interface ItemType {
  storeName: string;
  location: string;
  logoImage: ImageSourcePropType | null;
  storeImage: ImageSourcePropType | null;
  specialOffer: string;
  validityDate: string;
  price: string;
}

const ProductDetail = ({ route, navigation }: DetailsScreenProps): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<ItemType | undefined>(undefined);
  const storeName = route.params.storeName;

  useEffect(() => {
    const findSelectedItem = (): void => {
      const allData = [...brandsData, ...lifestyleData, ...storesData];
      const item = allData.find((data) => data.storeName === storeName);

      setSelectedItem(item);
    };

    findSelectedItem();
  }, [storeName]);

  return (
    <View>
      {selectedItem && (
        <>
          {selectedItem.storeImage && (
            <ImageBackground source={selectedItem.storeImage} style={styles.backgroundImage}>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={30} color="black" />
              </TouchableOpacity>
              {selectedItem.logoImage && (
                <Image source={selectedItem.logoImage} style={styles.logoImage} />
              )}
            </ImageBackground>
          )}
          <View style={styles.textContainer}>
            <Text style={styles.brandHeading}>{selectedItem.storeName}</Text>
            <Text style={styles.locationSubHeading}>{selectedItem.location}</Text>
            <View style={styles.detailsCard}>
              <View style={{ borderRadius: 10, height: 110, flexDirection: 'row', backgroundColor: '#FFED69' }}>
                {selectedItem.logoImage && (
                  <Image source={selectedItem.logoImage} style={styles.subLogo} />
                )}
                <Text style={styles.dealDescription}>{selectedItem.specialOffer}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 180, height: 90, marginLeft: 20, justifyContent: 'center' }}>
                  <Text style={{ color: 'black', fontSize: 16 }}>Deal Validity:</Text>
                  <Text style={{ color: 'red', fontSize: 16 }}>{selectedItem.validityDate}</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                  <TouchableOpacity style={{ backgroundColor: '#FACB1D', borderRadius: 15, height: 30, width: 120, marginBottom: 10, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>Redeem Via PIN</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ backgroundColor: '#FACB1D', borderRadius: 15, height: 30, width: 120, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>Redeem Via QR</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: 270,
    width: '100%',
  },
  logoImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: '#F3F1F5',
    borderWidth: 2,
    position: 'absolute',
    bottom: -50,
    left: 150,
  },
  backButton: {
    backgroundColor: '#fff',
    width: 35,
    height: 35,
    marginTop: 20,
    marginLeft: 10,
    justifyContent: 'center',
  },
  textContainer :{
    marginTop: 50,
    height: '100%',
    width: '100%',
  },
  brandHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  locationSubHeading: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 17,
  },
  detailsCard: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 30,
    height: 250,
  },
  subLogo: {
    height: 70,
    width: 70, 
    borderRadius: 50, 
    borderWidth: 2, 
    borderColor: 'white', 
    marginTop: 20, 
    marginLeft: 15
  },
  dealDescription: {
    fontSize: 17,
    color: 'black',
    width: 220,
    height: 50,
    marginLeft: 20,
    marginTop: 25,
    textAlignVertical: 'center',
  }
});

export default ProductDetail;