import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { styles } from './styles';
import { CTextInput, CButton } from '../../Components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignIn = () => {

  const [isVisible, setVisible] = useState(true);

  return (
    <KeyboardAwareScrollView style={ styles.container } showsVerticalScrollIndicator={false}>
      <Image source={{ uri: 'https://i.pinimg.com/736x/8f/d8/eb/8fd8eb59bb027e607c6d14cdff1812eb.jpg'}} style={styles.cover} />
      <View style={ styles.container }>
        <Text style={styles.authTitle}>Login</Text>
        <CTextInput placeholder='Email ID' leftIcon='email-fast-outline' />
        <CTextInput 
          placeholder='Password' leftIcon='lock-outline' 
          secureTextEntry={isVisible}
          rightIcon={isVisible ? 'eye-off-outline' : 'eye-outline' }
          onPressRight={() => setVisible(!isVisible)}
        />
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <CButton btnText='Login' />
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignIn