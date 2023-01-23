import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import {
  Text,
  AppContainer,
  HomeHeader,
  DisplayAmount,
  AccountSetupCard,
  SavingsInfoCard
} from "./../../components";


import targetIcon from './../../../assets/images/target-large-icon.png';

const SaveUpDetail = () => {
  let is;
  return (
    <AppContainer padded={false}>
      <View>
        <HomeHeader />
      </View>

      <View style={styles.amount}>
        <DisplayAmount />

        <Text fontWeight="black" fontSize="size13">
          200,000
        </Text>
      </View>

      <View style={{ marginTop: 22, paddingHorizontal: 22, marginBottom: 41}}>
        <AccountSetupCard />

      </View>
      <View style={{ paddingHorizontal: 22, marginBottom: 30, width: "100%", flexDirection: 'row' }}>
        <SavingsInfoCard amount='200,000' cardContainerStyles={{marginRight: 17}}/>


        <SavingsInfoCard
        title='Lorem Target'
        action='Create Account'
        cardContainerStyles={{backgroundColor: 'rgba(241, 165, 194, 0.15)'}} 
        iconName={targetIcon}
        />

      </View>




    </AppContainer>
  );
};



const styles = StyleSheet.create({
  amount: {
    paddingLeft: 22,
    paddingTop: 12,
    flexDirection: 'row'
  },

  divider: {
    width: "100%",
    height: 7,
    backgroundColor: "rgba(38, 44, 85, 0.12)",
    opacity: 0.5,
  },
});

export default SaveUpDetail;
