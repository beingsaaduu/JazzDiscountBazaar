import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CityContext, CityProvider } from './CityContext'
import Ionicons from 'react-native-vector-icons/Ionicons'

import type { CompositeScreenProps } from '@react-navigation/native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { StackScreenProps } from '@react-navigation/stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './src/screens/HomeScreen'
import FoodScreen from './src/screens/FoodScreen'
import ReelsScreen from './src/screens/ReelsScreen'
import StoresScreen from './src/screens/StoresScreen'
import LifeStyleScreen from './src/screens/LifeStyleScreen'
import SearchScreen from './src/screens/SearchScreen'
import ProductDetail from './src/screens/ProductDetail'

export type TabParamsList = {
  Home: undefined
  Food: undefined
  Reels: undefined
  Stores: undefined
  Lifestyle: undefined
}

export type StackParamsList = {
  BottomTabs: undefined
  Search: undefined
  Details: { storeName: string }
}

export type SearchScreenProps = NativeStackScreenProps<StackParamsList, 'Search'>;

export type DetailsScreenProps = NativeStackScreenProps<StackParamsList, 'Details'>;

export type ProfileScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamsList, 'Home'>,
  StackScreenProps<StackParamsList>
>;

export type FoodScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamsList, 'Food'>,
  StackScreenProps<StackParamsList>
>;

export type ReelsScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamsList, 'Reels'>,
  StackScreenProps<StackParamsList>
>;

export type StoresScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamsList, 'Stores'>,
  StackScreenProps<StackParamsList>
>;

export type LifestyleScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamsList, 'Lifestyle'>,
  StackScreenProps<StackParamsList>
>;

const Tab = createBottomTabNavigator<TabParamsList>()
const Stack = createNativeStackNavigator<StackParamsList>()

const BottomTabNavigation = (): JSX.Element => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarLabel: ({ color }) => {
        let label;

        if (route.name === 'Home') {
          label = 'Home';
        } else if (route.name === 'Food') {
          label = 'Food';
        } else if (route.name === 'Reels') {
          label = 'Reels';
        } else if (route.name === 'Stores') {
          label = 'Stores';
        } else if (route.name === 'Lifestyle') {
          label = 'Lifestyle';
        }

        const fontSize = 15;
        const fontWeight = 'normal';

        return <Text style={{ fontSize, fontWeight, color }}>{label}</Text>;
      },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        display: 'flex',
      },
    })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Food"
        component={FoodScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Stores"
        component={StoresScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront-outline" color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Lifestyle"
        component={LifeStyleScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <CityProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BottomTabs" component={BottomTabNavigation} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Details" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </CityProvider>
  )
}


export default App;