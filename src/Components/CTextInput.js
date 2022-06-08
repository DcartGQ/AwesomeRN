import React from 'react';
import { COLORS, FAMILY } from '../Constants';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { scale, moderateScale, moderateVerticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CTextInput = ({
  placeholder,
  leftIcon,
  rightIcon,
  onPressRight,
  onChangeText = () => {},
  ...props
}) => {
  return (
    <View style={ styles.container }>
        <Icon name={leftIcon} style={styles.icon} />
        <TextInput 
          placeholder= {placeholder}
          style={ styles.input }
          { ...props }
        />
        {!!rightIcon ? <TouchableOpacity 
          activeOpacity={0.8}
          onPress={onPressRight}
        >
          <Icon name={rightIcon} style={styles.rightIcon} />
        </TouchableOpacity> : null }
    </View>
  )
}

export default CTextInput;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: moderateScale(40),
      position: 'relative'
    },

    input: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.BorderColor,
      color: COLORS.LightTextColor,
      marginLeft: moderateScale(10),
      fontFamily: FAMILY.REGULAR,
      fontSize: scale(12),
      padding: 0,
    },

    icon: {
      fontSize: scale(25),
      color: COLORS.LightTextColor
    },

    rightIcon: {
      fontSize: scale(20),
      color: COLORS.LightTextColor,
      position: 'absolute',
      top: moderateScale(-15),
      right: 0
    },
})