import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from '../router/MainStack';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { Color } from './libs/Color';

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: Color.white,
//     secondary: Color.orange,
//   },
// };

const App = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {/* <StoreProvider store={theme}> */}
        <PaperProvider>
          <MainStack />
        </PaperProvider>
        {/* </StoreProvider> */}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
