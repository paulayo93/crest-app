import React from "react";
import { View } from "react-native";
import {HashIcon} from "./../../assets/icons";



const DisplayAmount = ({amount, fontWeight, fontSize, subTitle, textStyles, subTextStyles, iconColor, iconHeight, iconWidth}) => {

    return (
        <View style={{flexDirection: "row",}}>
            <HashIcon height={iconHeight} width={iconWidth} color={iconColor}/>
            <Text style={{marginLeft: 1.5, ...textStyles}} fontSize={fontSize || 'size10'} fontWeight={fontWeight || 'semiBold'}>{amount}</Text>
            {subTitle && (
                <Text style={{marginLeft: 3, fontSize: 8, fontWeight: 'normal',  fontFamily: 'Inter_400Regular', ...subTextStyles}}>{subTitle}</Text>
            )}
        </View>
    )
}

export default DisplayAmount;