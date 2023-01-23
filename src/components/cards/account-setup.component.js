import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "./../text.component";
import Button from './../button.component';

import saveIcon from "./../../../assets/images/save-icon.png";

const AccountSetup = ({
    iconStyles,
    iconName,
    cardContainerStyles,
    title,
}) => {
    return (

        <View style={[styles.cardContainer, cardContainerStyles]}>
            <View style={{ flex: 1 }}>
                <View style={{ width: 189, height: 44 }}>

                    <Text
                        lineHeight="line22"
                        color="white"
                        fontSize="size16"
                        fontWeight="black"
                    >Complete your account set up</Text>

                </View>

                <Button title="Set up account"
                    fontStyles={{ fontSize: 12, fontWeight: '500' }}
                    containerStyles={{ width: 140, height: 39, backgroundColor: '#FFFFFF', marginTop: 14 }}
                    type='custom' fontColor='#3D79EF' />

                <View>

                </View>

            </View>

            <View style={{ paddingBottom: 10 }}>
                <Image
                    source={iconName || saveIcon}
                    style={[styles.saveIcon, iconStyles]}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#262C55",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        borderRadius: 10,
        paddingVertical: 16,
        paddingBottom: 31,
        paddingLeft: 15,
        paddingHorizontal: 14
    },
    titleContainer: {
        width: 115,
        height: 38,
    },
    saveIcon: {
        width: 50,
        height: 50,
        marginRight: 13,
    },
});

export default AccountSetup;
