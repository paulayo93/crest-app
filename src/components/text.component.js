import { COLORS } from './../constants';
import normalize from './../utils/normalize';
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

const textStyles = StyleSheet.create({
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
        fontFamily: 'Inter_500Medium,'
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
        fontSize: normalize(10)
    },
    size11: {
        fontSize: normalize(11)
    },
    size12: {
        fontSize: normalize(11)
    },
    size13: {
        fontSize: normalize(13)
    },
    size16: {
        fontSize: normalize(16)
    },
    size17: {
        fontSize: normalize(17)
    },
    size22: {
        fontSize: normalize(22)
    },
    line14: {
        lineHeight: normalize(14)
    },
    line15: {
        lineHeight: normalize(15)
    },
    line17: {
        lineHeight: normalize(17)
    },
    line20: {
        lineHeight: normalize(20)
    },
    line24: {
        lineHeight: normalize(24)
    },
    line30: {
        lineHeight: normalize(30)
    }
});