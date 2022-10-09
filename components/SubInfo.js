import { View, Text, Image } from 'react-native'
import { SIZES, FONTS, COLORS, SHADOWS, StyleSheet, assets } from '../constants'

export const NFTTitle = ({title,titleSize, subTitleSize, subTitle}) => {
  return (
    <View>
      <Text
      style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.gray
      }}
      >{title}</Text>

<Text
      style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLORS.gray
      }}
      >{subTitle}</Text>
    </View>
  )
}

export const EthPrice = ({price}) => {
    return (
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 20        
      }}>
       <Image source={assets.bit}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                marginRight:2,
                left:"40%"

              }}
       />
       <Text style={{
        fontFamily:FONTS.medium,
        fontSize: SIZES.font,
        color: COLORS.gray,
        left: "60%"
       }}>
       {price}
       </Text>
      </View>
    )
  }
  
  export const ImageCmp = ({ imgUrl, index }) => {
    return (
      <Image 
            source={imgUrl}
            resizeMode="contain"
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font
            }}
            />
    )
  }
  
  export const People = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
            <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
        ))}
      </View>
    )
  }
  
  export const EndDate = () => {
    return (
      <View
        style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.primary,
            justifyContent: "center",
            alignItems: "center",
            ...SHADOWS.dark,
            elevation: 1,
            maxWidth: '50%',
            borderRadius: 10

        }}
      >
        <Text style={{
             fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: COLORS.gray
             }}>Ends In</Text>

<Text style={{
             fontFamily: FONTS.semiBold,
              fontSize: SIZES.medium,
              color: COLORS.gray
             }}>1h 10min</Text>
      </View>
    )
  }
  
  export const SubInfo = () => {
    return (
      <View style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between"
      }}>
        <People />
        <EndDate />
      </View>
    )
  }
  