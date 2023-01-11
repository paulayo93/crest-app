import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, AppContainer, HomeHeader } from "./../../components";

const Home = () => {
  return (
    <AppContainer padded={false}>
      <View>
        <HomeHeader />
      </View>

      <View style={styles.name}>
        <Text lineHeight='line30' fontWeight="black" fontSize='size13'>Olumide </Text>
      </View>

      <View>
        
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
    name: {
        paddingLeft: 22,
        paddingTop: 41
    }
})

export default Home;
