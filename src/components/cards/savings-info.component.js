import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Text from "./../text.component";
import DisplayAmount from "../display-amount.component";

import saveIcon from "./../../../assets/images/save-large-icon.png";

const SavingsInfo = ({ title, iconName, iconStyles, cardContainerStyles, amount, action, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>

       
        <View style={[homeStyles.cardContainer, cardContainerStyles]}>
            <View style={{ marginBottom: 22, paddingLeft: 19, paddingTop: 30 }}>
                <Image
                    style={[homeStyles.icon, iconStyles]}
                    source={iconName || saveIcon}
                />
            </View>
            <View style={homeStyles.content}>

                <Text fontSize="size12" lineHieght fontWeight="bold" style={{ marginBottom: 6, paddingLeft: 19 }}>
                    {title || "Lorem Save"}
                </Text>

                <View style={{ paddingLeft: 19, paddingRight: 10, marginBottom: 21 }}>

                    <Text fontWeight="light" lineHeight='line17'>
                        Lorem ipsum tryr cgddy dg
                        gdfd gdfdgdgt dvdf ddffd
                        fggdfgfdts f
                    </Text>

                </View>

                {
                    action && (
                        <View style={{ flexDirection: 'row', paddingLeft: 19 }}>
                            <Text fontSize='size12' fontWeight="bold" color='#F1A5C2'>
                                {action}
                            </Text>
                        </View>
                    )
                }
                {
                    amount && (
                        <View style={{ flexDirection: 'row', paddingLeft: 19 }}>
                            <DisplayAmount iconColor={'#3D79EF'} />
                            <Text fontSize='size12' fontWeight="bold" color='#3D79EF'>
                                {amount}
                            </Text>
                        </View>
                    )
                }

            </View>
        </View>
        </TouchableOpacity>
    );
};

const homeStyles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "rgba(61, 121, 239, 0.15)",
        borderRadius: 8,
        height: 212,
        width: 156,
        marginRight: 13
    },
    icon: {
        width: 24,
        height: 24,
    },
    content: {
        // alignItems: "center",
    },
});

export default SavingsInfo;
