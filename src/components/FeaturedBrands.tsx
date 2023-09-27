import React from 'react'
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native'

type FeaturedBrandsProps = {
  src: ImageSourcePropType;
  name: string;
}

const FeaturedBrands = (props: FeaturedBrandsProps): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
      <Image source={props.src} style={styles.image} />
      <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 50,
    height: 115,
    width: 70,
    elevation: 5,
    backgroundColor: 'white',
  },
  image: {
    marginVertical: 5,
    height: 55,
    width: 55,
    borderRadius: 50,
  },
  text: {
    color: 'black',
    fontSize: 13,
  }
})

export default FeaturedBrands