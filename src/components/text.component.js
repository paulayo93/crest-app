import { COLORS } from './../constants';
import {create} from './../utils/normalize';
import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';

export default Text = React.memo(props => {
    const {
        lineHeight = 'line14', fontSize = 'size10', children, onPress, color, fontWeight = "normal", centered = false, style, ...rest
    } = props;
    return (
        <RNText
            onPress={onPress}
            style={[{
                color: color || COLORS.TEXT,
                textAlign: centered ? "center" : "left",
                ...textStyles[fontWeight],
                ...textStyles[fontSize],
                ...textStyles[lineHeight],
                ...style
            }]}
            {...rest}
        >
            {children}
        </RNText>
    );
});

const textStyles = create({
    black: {
        fontWeight: "900",
        fontFamily: "Merriweather_900Black"
    },
    bold: {
        fontWeight: "700",
        fontFamily: 'Inter_700Bold'
    },
    semiBold: {
        fontWeight: '600',
        fontFamily: 'Inter_600SemiBold'
    },
    medium: {
        fontWeight: "500",
        fontFamily: 'Inter_500Medium'
    },
    normal: {
        fontWeight: 'normal',
        fontFamily: 'Inter_400Regular'
    },
    light: {
        fontWeight: '300',
        fontFamily: 'Inter_300Light'
    },
    size10: {
        fontSize: 10
    },
    size11: {
        fontSize: 11
    },
    size12: {
        fontSize: 11
    },
    size13: {
        fontSize: 13
    },
    size16: {
        fontSize: 16
    },
    size17: {
        fontSize: 17
    },
    size22: {
        fontSize: 22
    },
    line14: {
        lineHeight: 14
    },
    line15: {
        lineHeight: 15
    },
    line17: {
        lineHeight: 17
    },
    line20: {
        lineHeight: 30
    },
    line24: {
        lineHeight: 24
    },
    line30: {
        lineHeight: 30
    }
    
});