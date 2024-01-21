import {
  Animated,
  Dimensions,
  FlatList,
  GestureResponderEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Colors} from '../../../constants/colors';
import Header from '../../helpers/header/Header';
import React, {useEffect, useState} from 'react';
import {RouteStackParamList} from '../../../Routes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {storeData} from './helper/carData';
import ProductCard from './helper/productCard';
import {ScrollView} from 'react-native-gesture-handler';
import {getStores} from '../../../store/actions/stores';
import {RFValue} from 'react-native-responsive-fontsize';
import {Bold, RobMono} from '../../../constants/Fonts';
import DetectScreen from '../detect/DetectScreen';
import {launchCamera} from 'react-native-image-picker';
const {height} = Dimensions.get('window');
import ImagePicker from 'react-native-image-crop-picker';

const Home: React.FC<RouteStackParamList<'Home'>> = ({
  navigation,
  route,
}: RouteStackParamList<'Home'>) => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.x, flex: 1,justifyContent:'center',alignItems:'center'}}>
      <Header
        testID={'menu'}
        navigation={navigation}
        scroll={false}
        creds={true}
        
        name={'Aditya Walia'}
      />
      <ScrollView>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>
     
      
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  mainCon: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
  },

  headText: {
    marginBottom: 20,
    fontSize: RFValue(25),
    color: Colors.black,
    fontFamily: Bold,
  },
});
