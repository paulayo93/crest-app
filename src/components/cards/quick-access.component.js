import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "./../text.component";
import DisplayAmount  from "../display-amount.component";

import insertIcon from "./../../../assets/images/insert-icon.png";
import normalize from "../../utils/normalize";

const QuickAccess = ({
  iconStyles,
  iconName,
  cardContainerStyles,
  invert = false,
  title,
  subTitle,
}) => {
  return (
    <View>
      <View>
        <View style={[styles.cardContainer, cardContainerStyles]}>
          <View style={{ paddingBottom: 10 }}>
            <Image
              source={iconName  || insertIcon}
              style={[styles.insertIcon, iconStyles]}
            />
          </View>
          {invert ? (
            <View style={styles.titleContainer}>
              <Text
                color="white"
                fontWeight="semiBold"
                style={{ marginBottom: 7 }}
              >
                {title || "Plus Save"}
              </Text>

              <DisplayAmount
              textStyles={{
                fontSize: 14,
                fontWeight: "bold",
                color: 'white',
                lineHeight: 15
              }}
              iconColor={'white'} amount={"200,000"}/>

            </View>
          ) : (
            <View style={styles.titleContainer}>
              <Text
                lineHeight="line19"
                color="white"
                fontSize="size11"
                fontWeight="semiBold"
              >
                {title || "Lorem ipsum rter lorem ipsum"}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#262C55",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 89,
    width: 181,
  },
  titleContainer: {
    width: 115,
    height: 38,
  },
  insertIcon: {
    width: 22,
    height: 22,
    marginRight: 13,
  },
});

export default QuickAccess;
