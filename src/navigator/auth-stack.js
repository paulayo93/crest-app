import { ROUTES } from '../constants';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import Onboarding from './../screens/auth/onboarding.screen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.ONBOARDING}>
      <Stack.Screen name={ROUTES.ONBOARDING} component={Onboarding} />
    </Stack.Navigator>
  );
};

export default AuthStack;