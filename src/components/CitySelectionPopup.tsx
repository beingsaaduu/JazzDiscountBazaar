import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CityContext } from '../../CityContext';

const cities = [
    'Islamabad',
    'Rawalpindi',
    'Karachi',
    'Lahore',
    'Abbotabad',
    'Sargodha',
    'Multan',
    'Faisalabad',
    'Sialkot',
    'Gujranwala'
];

interface CitySelectionPopupProps {
    isVisible: boolean;
    onClose: () => void;
}

const CitySelectionPopup: React.FC<CitySelectionPopupProps> = ({isVisible, onClose}) => {
    const {currentCity, setCurrentCity} = useContext(CityContext);

    const handleCityPress = (city: string) => {
        setCurrentCity(city);
    };

    return (
        <Modal
            transparent={true}
            visible={isVisible}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.modal}>
                <View style={styles.popup}>

                    <View style={{ flexDirection: 'row', marginBottom: 10, paddingBottom: 10, borderBottomWidth: 1, marginTop: 15, marginHorizontal: 10 }}>
                        <Text style={styles.heading}>Select City</Text>
                        <Image
                            style={{ width: 60, height: 60, position: 'absolute', right: 2, top: -10 }}
                            source={require('C:/Users/Muhammad Saad/Desktop/TypeScript/JazzDiscountBazaar/src/assets/images/JDBLogo.png')} />
                    </View>


                    {cities.map((city, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.cityItem}
                            onPress={() => handleCityPress(city)}
                        >
                            <View style = {{flexDirection: 'row',alignItems: 'center',marginLeft: 10}}>
                                <Ionicons
                                    name={
                                        currentCity === city
                                            ? 'radio-button-on-outline'
                                            : 'radio-button-off-outline'
                                    }
                                    size={20}
                                    color="red"
                                />
                                <Text style={styles.cityName}>{city}</Text>

                            </View>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity style={styles.continueButton} onPress={onClose}>
                        <Text style={{ fontSize: 18, color: 'black', bottom: 2 }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    popup: {
        backgroundColor: 'white',
        //padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: 370,
        height: 720,
    },
    heading: {
        flex: 1,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
    },
    cityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    cityName: {
        top: 4,
        color: 'black',
        marginLeft: 10,
        fontSize: 18,
        marginBottom: 10,
    },
    continueButton: {
        marginTop: 10,
        backgroundColor: '#FACB1D',
        width: 150,
        height: 50,
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        alignSelf: 'center',
    },
});

export default CitySelectionPopup;
