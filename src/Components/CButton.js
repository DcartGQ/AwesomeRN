import React from 'react';
import { COLORS, FAMILY } from '../Constants';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CButton = ({
    btnText,
    type,
    outline,
    onPress = () => {},
    ...props
}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
        >
            <View style={!!outline ? styles.btnOutlineStyle : styles.btnStyle}>
                <Text style={{...!!outline ? styles.btnOutlineText : styles.btnText, textTransform: !!type ? type : 'capitalize' }}>{btnText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CButton;

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: COLORS.SecondaryColor,
        height: moderateScale(50),
        borderRadius: moderateScale(5),
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnText: {
        fontSize: scale(14),
        fontFamily: FAMILY.MEDIUM,
        color: COLORS.White,
    },

    btnOutlineStyle: {
        borderWidth: moderateScale(2),
        borderColor: COLORS.SecondaryColor,
        height: moderateScale(50),
        borderRadius: moderateScale(5),
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnOutlineText: {
        fontSize: scale(14),
        fontFamily: FAMILY.MEDIUM,
        color: COLORS.ThemeColor,
    }
})