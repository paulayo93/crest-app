import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Text, AppContainer } from "./../../components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../../redux-store/crest.reducers";
import { Image, StyleSheet, Platform } from "react-native";
import baselineLogo from "./../../../assets/images/baseline.png";
import dots from "./../../../assets/images/dot.png";
import bannerImage from "./../../../assets/images/banner-image.png";

const Button = ({ title, onPress, type='primary' }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          btnStyles[type],
          btnStyles.container,
        ]}
      >
        <Text fontWeight='500' fontSize='size14' color={type === 'secondary' ? '#262C55' : 'white'}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const btnStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 8,
    height: 46
  },
  primary: {
    backgroundColor: "#262C55",
  },
  secondary: {
    backgroundColor: "#d4d6da",
    borderWidth: 0.5,
    borderColor: 'rgba(38, 44, 85, 0.4)'
  }
});

const Onboarding = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.crest.isLoggedIn);

  return (
    <AppContainer padded>
      <View style={styles.header}>
        <Image style={styles.logo} source={baselineLogo} />
        <Text
          fontSize="size22"
          lineHeight="line20"
          fontWeight="bold"
          style={styles.headerText}
        >
          baseline
        </Text>
      </View>

      <View style={[styles.centerItem, styles.bannerTopMargin]}>
        <Image style={styles.banner} source={bannerImage} />
      </View>
      <View style={styles.bannerText}>
        <Text centered={true} fontWeight="black" lineHeight="line30">
          Lorem ipsum fgftr reer ut ta rtr ar gxnshsryerbre retetrtr
        </Text>
      </View>

      <View style={[styles.bannerTopMargin, { paddingHorizontal: 120 }]}>
        <Image source={dots} />
      </View>

    <View style={[styles.centerItem, {flexDirection: 'row', paddingHorizontal: 25, marginTop: 139, paddingBottom: 100}]}>
      <View style={{width: 146}} >
      <Button type='primary' title="Login" onPress={() => dispatch(login({ isLoggedIn }))} />

      </View>
      <View style={{width: 146, marginLeft: 21}}>
      <Button type='secondary' title="Create Account" onPress={() => null} />

      </View>


    </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 27,
    height: 25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 86,
  },
  headerText: {
    marginLeft: 8.41,
  },
  banner: {
    width: 330,
    height: 282.19,
  },
  centerItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  bannerTopMargin: {
    marginTop: 37,
  },
  bannerText: {
    paddingHorizontal: Platform.OS === "android" ? 70 : 38,
    marginTop: 36.81,
  },
});
export default Onboarding;
