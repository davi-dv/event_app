import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignIn} from '../pages/SignIn/index';
import { SignUp } from '../pages/SignUp';
const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#10163a'}
      }}>
      <Auth.Screen name="Login" component={SignIn} />
      <Auth.Screen name="Register" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
