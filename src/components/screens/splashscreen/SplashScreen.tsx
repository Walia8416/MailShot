import {View, Text} from 'react-native';
import React from 'react';
import {RouteStackParamList} from '../../../Routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './SplashScreens';

import {useDispatch} from 'react-redux';


const SplashScreen: React.FC<RouteStackParamList<'SplashScreen'>> = ({
  navigation,
  route,
}: RouteStackParamList<'SplashScreen'>) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 50);
  });

  
  return (
    <View style={styles.screen}>
      <View style={styles.subsection}>
        
      </View>
    </View>
  );
};
export default SplashScreen;
