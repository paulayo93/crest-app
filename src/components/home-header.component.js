import React from "react";
import { View, Image, StyleSheet } from "react-native";
import  Text  from "./text.component";

import downPointer from "./../../assets/images/down-pointer.png";
import locationIcon from "./../../assets/images/location-icon.png";
import searchIcon from "./../../assets/images/search-icon.png";
import toggleIcon from "./../../assets/images/toggle-icon.png";

const HomeHeader = () => {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.leftItemContainer}>
        <Image style={headerStyles.location} source={locationIcon} />
        <Text fontSize="size12" fontWeight="medium">
          Lekki, Lagos, Nigeria
        </Text>
        <Image style={headerStyles.pointer} source={downPointer} />
      </View>

      <View style={headerStyles.rightItemContainer}>
        <Image source={searchIcon} style={headerStyles.search} />
        <Image source={toggleIcon} style={headerStyles.toggle} />
      </View>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    paddingTop: 65,
    paddingLeft: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  location: { width: 10, height: 12.73, marginRight: 4 },
  pointer: { width: 10, height: 5, marginLeft: 4 },
  leftItemContainer: { alignItems: "center", flexDirection: "row" },
  rightItemContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 25.36,
  },
  search: { width: 19, height: 19 },
  toggle: { width: 21.64, height: 17, marginLeft: 17 },
});

export default HomeHeader;
