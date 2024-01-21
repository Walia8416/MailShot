import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {RouteStackParamList} from '../../../Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './DetectScreens';
import ImageContainer from '../../helpers/header/ImageContainer';
import Images from '../../../constants/icon';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  Bold,
  ExtraBold,
  RobMono,
  SemiBoldItalic,
} from '../../../constants/Fonts';
import {Colors} from '../../../constants/colors';
import {useAppSelector} from '../../../store/store';
import {useDispatch} from 'react-redux';
import {getStores} from '../../../store/actions/stores';
import {getorders} from '../../../store/actions/getOrders';
import Header from '../../helpers/header/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {launchCamera} from 'react-native-image-picker';
const DetectScreen: React.FC<RouteStackParamList<'DetectScreen'>> = ({
  navigation,
  route,
}: RouteStackParamList<'DetectScreen'>) => {
  
 

  
  return (
    <SafeAreaView style={{backgroundColor: Colors.x, flex: 1}}>
      <Header
        testID={'menu'}
        navigation={navigation}
        scroll={false}
        creds={true}
        title={'Detect Board'}
      />
      <View style={{flex:1}}>
        <RNCamera/>
      </View>
      
    </SafeAreaView>
  );
};
export default DetectScreen;
