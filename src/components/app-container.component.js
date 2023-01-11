import { COLORS } from './../constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default AppContainer = ({
    children, backgroundColor, padded = true,
    scroll = true,
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View
        
            style={{
                flex: 1,
                paddingTop: padded ? insets.top : 0,
                paddingLeft: padded ? insets.left + 16 : 0,
                paddingRight: padded ? insets.right + 16 : 0,
                paddingBottom: padded ? insets.bottom + 6 : 0,
                backgroundColor: backgroundColor || COLORS.WHITE
            }}>

            <View style={appContainerStyles.content}>
                {scroll ? (
                    <KeyboardAwareScrollView
                        contentContainerStyle={appContainerStyles.contentContainerStyle}
                        style={appContainerStyles.container}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={1}
                    >
                        {children}
                    </KeyboardAwareScrollView>
                ) : (
                    <>
                        {children}
                    </>
                )}
            </View>
        </View>
    );
};

const appContainerStyles = StyleSheet.create({
    contentContainerStyle: {
        flexGrow: 1,
    },
    container: {
        height: '100%',
        flex: 1,
        backgroundColor: 'transparent',
    },
    content: {
        flex: 1,
        width: '100%',
    }
});