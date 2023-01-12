import React from 'react';
import { StyleSheet, View } from 'react-native';

export default ProgressBar = React.memo((props) => {
    const { progress, outerBackgroundColor, innerBackgroundColor, height = 8, padded = true } = props;
    return (
        <View style={[{
            height: height,
            backgroundColor: outerBackgroundColor || '#718596',
            paddingHorizontal: padded ? 3 : 0,
        }, progressStyles.container]}>
            <View
                style={[{
                    height: height / 2,
                    backgroundColor: innerBackgroundColor || '#EDF2F7',
                    width: `${progress}%`,
                }, progressStyles.content]}
            />
        </View>
    )
});
const progressStyles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 16,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    content: {
        borderRadius: 16,
    }
});