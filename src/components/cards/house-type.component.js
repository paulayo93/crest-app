import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Text from "./../text.component";

import houseOne from "./../../../assets/images/house-icon-one.png";

const HouseType = ({ title, iconName, iconStyles, cardContainerStyles, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>

   
    <View style={[homeStyles.cardContainer, cardContainerStyles]}>
      <View style={homeStyles.content}>
        <Image
          style={[homeStyles.icon, iconStyles]}
          source={iconName || houseOne}
        />
        <Text centered={true} fontWeight="medium">
         {title || "Lorem ipsu Companies"}
        </Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const homeStyles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "rgba(241, 165, 194, 0.2)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 91,
    width: 100,
    marginRight: 13
  },
  icon: {
    width: 24,
    height: 25.26,
    marginBottom: 9.76,
  },
  content: {
    alignItems: "center",
  },
});

export default HouseType;
