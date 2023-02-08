import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import { NavigatorScreenParams } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import OnboardingScreen from '../src/screen/OnboardingScreen';
import HomeScreen from '../src/screen/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export type RouterRootStackProps = {
  Onboarding: undefined;
  Home: undefined;
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
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lighter }}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.transparent} />
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          headerShown: false,
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default MainStack;
