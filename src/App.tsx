import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from '../router/MainStack';
import { Provider as PaperProvider } from 'react-native-paper';

const App = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <PaperProvider>
          <MainStack />
        </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
