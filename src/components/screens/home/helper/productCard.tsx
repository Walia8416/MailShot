import {Dimensions, Image, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {heighttodp, widthtodp} from '../../../../constants/Dimenstions';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ImageContainer from '../../../helpers/header/ImageContainer';
import Images from '../../../../constants/icon';
import {ScrollView} from 'react-native-gesture-handler';
import {storeData} from './carData';
import {Screen_Height, Screen_Width} from '../../../../constants/constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {Bold, Medium, Regular, ThinItalic} from '../../../../constants/Fonts';
const {width} = Dimensions.get('window');

const ProductCard = ({email,body,snippet}) => {
  return (
    <View style={styles.cardView}>
      <ImageContainer style={{ height: heighttodp(50), width: widthtodp(50) }} name={Images.user} />
      <View style={styles.loc}>
      
        <Text style={styles.mailText}>adi.walia16@gmail.com</Text>
        <Text style={styles.headText}>Deep Learning LLM</Text>
        <Text style={styles.emailBody}>This is to inform you about the new advances in deeplearning llms</Text>
        
      </View>
      
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardView: {
    justifyContent:'space-around',
    backgroundColor: "#303030",
    width: widthtodp(Screen_Width * 0.8),
    height: heighttodp(Screen_Height * 0.15),
    padding:15,
    elevation: 10,
    margin: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#303030',
    flexDirection:'row',
    flex:1,
    
    
    
  },
  image: {
    borderRadius: 10,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  headText: {
    fontSize: RFValue(16),
    color: "#e2e3e3",
    fontFamily: Bold,
  },
  mailText: {
    fontSize: RFValue(12),
    color: "#e2e3e3",
    fontFamily: ThinItalic,
    
  },
  loc: {
    
    padding:10
    
  },
  emailBody:{
    color: "#e2e3e3",
    fontSize:12,
    fontFamily:ThinItalic,
  }
});
