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



const Home = () => {
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
        <ScrollView
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <QuickAccessCard />
          <QuickAccessCard
            invert={true}
            title="Plus Save"
            subTitle="#200,000"
            iconName={saveIcon}
            iconStyles={{
              width: 24,
              height: 24,
            }}
            cardContainerStyles={{
              backgroundColor: "#3D79EF",
              marginHorizontal: 16,
            }}
          />
          <QuickAccessCard
            invert={true}
            title="Plus Target"
            subTitle="Create Account"
            iconName={targetIcon}
            iconStyles={{
              width: 24,
              height: 24,
            }}
            cardContainerStyles={{
              backgroundColor: "#F1A5C2",
              marginRight: 10,
            }}
          />
        </ScrollView>
      </View>
      <View style={{ paddingHorizontal: 22, marginBottom: 30, width: "100%" }}>
        <ScrollView
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <HouseTypeCard />
          <HouseTypeCard />
          <HouseTypeCard />
          <HouseTypeCard />
          <HouseTypeCard />
          <HouseTypeCard />
        </ScrollView>
      </View>
      <View style={styles.divider} />

      <View style={[styles.name, { paddingTop: 30 }]}>
        <Text lineHeight="line30" fontWeight="black" fontSize="size13">
          Lorem Features
        </Text>
      </View>

      <View style={{ paddingHorizontal: 22, paddingBottom: 30 }}>
        <ScrollView
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <SaleInfoCard isSelling={false} />
          <SaleInfoCard isSelling={false} />
          <SaleInfoCard isSelling={false} />
        </ScrollView>
      </View>

      <View style={styles.divider} />

      <View style={[styles.name, { paddingTop: 30 }]}>
        <Text lineHeight="line30" fontWeight="black" fontSize="size13">
          Lorem Features
        </Text>
      </View>

      <View style={{ paddingHorizontal: 22, paddingBottom: 30 }}>
        <ScrollView
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <SaleInfoCard isSelling={false} />
          <SaleInfoCard isSelling={false} />
          <SaleInfoCard isSelling={false} />
        </ScrollView>
      </View>

      <View style={styles.divider} />

      <View
        style={[
          styles.name,
          { paddingTop: 30, flexDirection: "row", alignItems: "center" },
        ]}
      >
        <Text lineHeight="line30" fontWeight="black" fontSize="size13">
          Lorem Features in thrtr werefv
        </Text>
        <Image
          source={greenLoveIcon}
          style={{ width: 14.82, height: 14, marginLeft: 2 }}
        />
      </View>

      <View style={{ paddingHorizontal: 22, paddingBottom: 30 }}>
        <ScrollView
          horizontal={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <SaleInfoCard location="Omole Estate" isSelling={true} />
          <SaleInfoCard location="Berger" isSelling={true} />
          <SaleInfoCard location="Ikeja" isSelling={true} />
        </ScrollView>
      </View>

      <View>
        <View style={[styles.name, { paddingTop: 30 }]}>
          <Text lineHeight="line30" fontWeight="black" fontSize="size13">
            Lorem Features
          </Text>
        </View>

        <View
          style={{ paddingHorizontal: 24, marginTop: 21, paddingBottom: 24 }}
        >
          <DisplayCompanyCard />
        </View>

        <View style={{flexDirection: 'row', paddingHorizontal: 24, paddingBottom: 30}}>
        <Tag title='Ipsumamus'/>
        <Tag title='Ipsum'/>
        <Tag title='Lorem ipsum'/>
        </View>
      
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

export default Home;
