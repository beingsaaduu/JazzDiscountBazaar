import React from 'react'
import { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CitySelectionPopup from './CitySelectionPopup';
import { SearchScreenProps } from '../../App';
import { CityContext } from '../../CityContext';

const HeaderBar = ({ navigation }: SearchScreenProps): JSX.Element => {

  const [isCitySelectionVisible, setCitySelectionVisible] = useState(false);

  const handleCitySelectionPress = () => {
    setCitySelectionVisible(true);
  };

  const handleCloseCitySelection = () => {
    setCitySelectionVisible(false);
  };

  const {currentCity, setCurrentCity} = useContext(CityContext);

  return (
    <View>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="menu-outline" size={30} color="black" />
        </TouchableOpacity>
        <View style={{ marginLeft: 18, marginBottom: 11 }}>
          <Text style={{ color: 'black', fontSize: 18 }}>Home</Text>

          <TouchableOpacity onPress={handleCitySelectionPress}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'red', fontSize: 14, marginRight: 5 }}>{currentCity}</Text>
              <Ionicons name="chevron-down-outline" size={18} color="red" />
            </View>
          </TouchableOpacity>
          <CitySelectionPopup isVisible={isCitySelectionVisible} onClose={handleCloseCitySelection} />
        </View>
      </View>
      <View>
        <TextInput placeholder='Search for stores and restaurants' style={styles.searchBar} onPressIn={() => navigation.navigate('Search')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  topBar: {
    marginTop: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'row',
  },
  menuButton: {
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderRadius: 5,
    marginTop: 5,
    elevation: 5,
    backgroundColor: '#fff',
  },
  searchBar: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: 370,
    borderWidth: 0,
    borderRadius: 8,
    fontSize: 16,
    elevation: 5,
  },
});

export default HeaderBar;
