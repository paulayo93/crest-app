import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "./../text.component";

import companyImage from "./../../../assets/images/landwey-image.png";
import bookmarkIcon from "./../../../assets/images/bookmark-icon.png";

import { StarIcon } from "./../../../assets/icons";

const DisplayCompanyCard = ({
  title = "Landwey",
  rating = "4.5",
}) => {
  return (
    <View>
      <Image style={saleCardStyles.cardImage} source={companyImage} />

      <View
        style={{
          maxWidth: 300,
          flexDirection: "row",
          marginTop: 13,
          justifyContent: "space-between",
        }}
      >
        <Text fontWeight="bold" fontSize="size14">
          {title}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center"}}>
          <View style={{ flexDirection: "row", marginRight: 13 }}>
            <StarIcon />
            <Text style={{ fontSize: 10, marginLeft: 3 }}>{rating}</Text>
          </View>

          <Image source={bookmarkIcon} style={{ width: 12, height: 14.8 }} />
        </View>
      </View>
    </View>
  );
};

const saleCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#262C55",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 89,
    width: 181,
  },
  cardImage: {
    width: 328,
    height: 167,
    borderRadius: 8,
    marginLeft: 0,
    left: -10,
  },
});

export default DisplayCompanyCard;
