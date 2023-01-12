import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "./../text.component";
import DisplayAmount from "./../display-amount.component";
import ProgressBar from "./../progress-bar.component";

import homeOne from "./../../../assets/images/home-image-one.png";
import bookmarkIcon from "./../../../assets/images/bookmark-icon.png";

const SaleInfoCard = ({
  amountTaken = "40 Taken",
  amountAvailable = "38 Available",
  isSelling = true,
  initialDeposit = "700,000",
  totalAmount = "1,100,000",
  title = "Lorem Ipsumusa dare",
  location = "Oke-ira",
  initialAmountSubtitle = "p.a",
  totalAmountSubtitle = "Package",
  onSaleTitle = "Lorem ipsum",
}) => {
  return (
    <View style={{ paddingHorizontal: 22 }}>
      <Image style={saleCardStyles.cardImage} source={homeOne} />

      <View
        style={{
          maxWidth: 245,
          flexDirection: "row",
          marginTop: 13,
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text fontWeight="bold" fontSize="size11">
          {title}
        </Text>
        <View
          style={{
            width: 0,
            height: 18,
            borderColor: "rgba(38, 44, 85, 0.3)",
            borderWidth: 1,
          }}
        />
        <Text style={{ fontSize: 10 }}>{location}</Text>
        <Image source={bookmarkIcon} style={{ width: 12, height: 14.8 }} />
      </View>

      {isSelling && (
        <View style={{ maxWidth: 245, marginTop: 14 }}>
          <Text
            fontWeight="semiBold"
            style={{ fontSize: 8, color: "rgba(38, 44, 85, 0.6)" }}
          >
            {onSaleTitle}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 8, color: "rgba(38, 44, 85, 0.6)" }}>
              {amountTaken}
            </Text>

            <Text style={{ fontSize: 8, color: "rgba(38, 44, 85, 0.6)" }}>
              {amountAvailable}
            </Text>
          </View>
          <ProgressBar
            outerBackgroundColor={"rgba(38, 44, 85, 0.2)"}
            innerBackgroundColor={"#F1A5C2"}
            progress={38}
            height={4}
            padded={false}
          />
        </View>
      )}
      <View
        style={{
          maxWidth: 230,
          flexDirection: "row",
          marginTop: isSelling ? 12 : 22,
          width: "100%",
          alignItems: "center",
        }}
      >
        <DisplayAmount
          subTitle={initialAmountSubtitle}
          amount={initialDeposit}
        />

        <View
          style={{
            width: 0,
            height: 15,
            borderColor: "rgba(38, 44, 85, 0.3)",
            borderWidth: 1,
            marginHorizontal: 8,
          }}
        />
        <DisplayAmount subTitle={totalAmountSubtitle} amount={totalAmount} />
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
    width: 255,
    height: 138,
    borderRadius: 8,
    marginLeft: 0,
    left: -4,
  },
});

export default SaleInfoCard;
