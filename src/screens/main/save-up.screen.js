import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import {
  Text,
  AppContainer,
  HomeHeader,
  QuickAccessCard,
  HouseTypeCard,
  SaleInfoCard,
  DisplayCompanyCard,
  Tag
} from "./../../components";

import saveIcon from "./../../../assets/images/save-icon.png";
import targetIcon from "./../../../assets/images/target-icon.png";
import houseOne from "./../../../assets/images/house-icon-one.png";

import homeOne from "./../../../assets/images/home-image-one.png";
import bookmarkIcon from "./../../../assets/images/bookmark-icon.png";

import greenLoveIcon from "./../../../assets/images/green-love-icon.png";



const SaveUp = () => {
  let is;
  return (
    <AppContainer padded={false}>
      <View>
        <HomeHeader />
      </View>

      <View style={styles.name}>
        <Text lineHeight="line30" fontWeight="black" fontSize="size13">
          Olumide{" "}
        </Text>
      </View>

      <View style={{ marginTop: 22, paddingHorizontal: 22, marginBottom: 20 }}>
      <QuickAccessCard />
      
      </View>
      <View style={{ paddingHorizontal: 22, marginBottom: 30, width: "100%" }}>
      <HouseTypeCard />
       
      </View>
   


    
    </AppContainer>
  );
};



const styles = StyleSheet.create({
  name: {
    paddingLeft: 22,
    paddingTop: 41,
  },

  divider: {
    width: "100%",
    height: 7,
    backgroundColor: "rgba(38, 44, 85, 0.12)",
    opacity: 0.5,
  },
});

export default SaveUp;
