import React from 'react';

import { NavigatorScreenParams } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import OnboardingScreen from '../src/screen/OnboardingScreen';
import HomeScreen from '../src/screen/HomeScreen';


export type RouterRootStackProps = {
  Onboarding: NavigatorScreenParams<any>;
  Home: undefined
};

const Stack = createStackNavigator<RouterRootStackProps>();

const MainStack = () => {
  const data = {
    credentials: {
      isLogin: false,
      accessToken: 'abc123def456'
    }
  };

  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      {data.credentials.isLogin ?
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
        </>
        :
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      }
    </Stack.Navigator>
  );
};

export default MainStack;
