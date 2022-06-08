import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp, ForgotPassword, ResetPassword } from '../Screens';
import { NavigationStrings } from '../Constants';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name={ NavigationStrings.SIGNIN } component={ SignIn } />
            <Stack.Screen name={ NavigationStrings.SINGUP } component={ SignUp } />
            <Stack.Screen name={ NavigationStrings.FORGOTPASSWORD } component={ ForgotPassword } />
            <Stack.Screen name={ NavigationStrings.RESETPASSWORD } component={ ResetPassword } />
        </Stack.Navigator>
  )
}

export default AuthStack