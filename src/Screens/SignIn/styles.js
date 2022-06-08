import { StyleSheet } from 'react-native';
import { FAMILY, COLORS } from '../../Constants';
import { scale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
    statusBarStyle: {
        backgroundColor: '#fffff'
    },

    container: {
        flex: 1,
        backgroundColor: COLORS.White,
        padding: moderateScale(20)
    },

    cover: {
        height: moderateScale(250),
        borderBottomLeftRadius: moderateScale(30),
        borderBottomRightRadius: moderateScale(30)
    },

    authTitle: {
        fontFamily: FAMILY.SEMIBOLD,
        fontSize: scale(36),
        color: COLORS.PrimaryColor,
        marginBottom: moderateScale(40),
    },

    forgot: {
        alignSelf: 'flex-end',
        marginTop: moderateScale(-15),
        marginBottom: moderateScale(50),
        fontFamily: FAMILY.MEDIUM,
        color: COLORS.SecondaryColor,
        fontSize: scale(12)
    }

    
})