import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import  Text from "./text.component";
import { StyleSheet } from "react-native";


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

export default Button;