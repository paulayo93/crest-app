import React from 'react';
import {View} from 'react-native';
import Text from './text.component';

const Tag = ({title}) => {

    return(
        <View>
        <View
          style={{
            paddingVertical: 4,
            paddingHorizontal: 5,
            height: 23,
            backgroundColor: "rgba(61, 121, 239, 0.06)",
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight:11
          }}
        >
          <Text centered={true} color={"#3D79EF"}>{title}</Text>
        </View>
      </View>
    )
}

export default Tag;