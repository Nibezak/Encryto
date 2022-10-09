import { View, Text , TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { COLORS, SHADOWS, SIZES, FONTS } from '../constants';

export const CircleButton = ({ imgUrl, handlepress, ...props}) => {
  return (
   <TouchableOpacity style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
   }}
    onPress={handlepress}
   >
    <Image source={imgUrl}
           resizeMode="contain"
           style={{ width: 24 , height: 24}} />
   </TouchableOpacity>
  )
}

export const RectButton = ({ minWidth, fontSize,handlePress, ...props}) => {
  
  return(
    <TouchableOpacity style={{
      backgroundColor: COLORS.primary,
      borderRadius: SIZES.extraLarge,
      minWidth : minWidth,
      right:30,
      bottom: 10,
      alignItems: "center",
      justifyContent: "center",
      padding: SIZES.small,
      ...SHADOWS.medium,
      ...props,
 }}
  onPress={handlePress}
 >
  <Text style={{
    fontFamily: FONTS.bold,
    fontSize: SIZES.medium,
    color: COLORS.gray,

  }}>Place a Bid</Text>
 </TouchableOpacity>
  );
}