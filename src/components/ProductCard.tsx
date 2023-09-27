import React from 'react'
import {View, Text, Image, StyleSheet, ImageBackground, ImageSourcePropType} from 'react-native';

type ProductCardProps = {
  imageBackground: ImageSourcePropType;
  brandName: string;
  dealDescription: string;
  logo: ImageSourcePropType;
  validityDate: string;
  price: string;
}

const ProductCard = (props: ProductCardProps): JSX.Element => {
  return (
    <View style={styles.productCardContainer}>
      <View style={{height: 200, width: '100%'}}>
        <ImageBackground
          source={props.imageBackground}
          style={{
            height: 200,
            width: '100%',
            flexDirection: 'row',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              paddingLeft: 7,
            }}>
            <Text style={styles.productNameTag} >
              {props.brandName}
            </Text>
          </View>
        </ImageBackground>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Text style={styles.productDescriptionTag}>
            {props.dealDescription}
          </Text>
          <Image
            source={props.logo}
            style={{
              height: 50,
              width: 50,
              borderRadius: 50,
              marginTop: 10,
              marginLeft: 30,
            }}
          />
        </View>
        <View
          style={{marginHorizontal: 10, marginTop: 10, flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{color: 'red'}}>Validity: </Text>
            <Text
              style={{
                borderRadius: 10,
                width: 85,
                backgroundColor: 'lightgray',
                textAlign: 'center',
              }}>
              {props.validityDate}
            </Text>
          </View>
          <Text
            style={{
              color: 'white',
              backgroundColor: 'green',
              width: 95,
              textAlign: 'center',
              borderRadius: 10,
            }}>
            Save Rs: {props.price}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  productCardContainer: {
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'white',
    height: 320,
    marginBottom: 20,
  },
  productNameTag: {
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
  },
  productDescriptionTag: {
    fontSize: 18,
    color: 'black',
    width: 280,
    marginLeft: 10,
  },
});

export default ProductCard;