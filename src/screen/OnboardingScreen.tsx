import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native/types';
import { Spacer } from '../libs';

const OnboardingScreen = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          contentContainerStyle={{ backgroundColor: '#f00' }}>
          <View style={{ width, height }}>
            <Text>Cuan Gak Pake Modal?</Text>
            <Spacer height={13} />
            <Text>Bisa dong, yuk gabung gratis Jadi sahabat Bang Jamin</Text>
          </View>
          <View style={{ width, height }}>
            <Text>Cuan Gak Pake Modal?</Text>
            <Spacer height={13} />
            <Text>Bisa dong, yuk gabung gratis Jadi sahabat Bang Jamin</Text>
          </View>
          <View style={{ width, height }}>
            <Text>Cuan Gak Pake Modal?</Text>
            <Spacer height={13} />
            <Text>Bisa dong, yuk gabung gratis Jadi sahabat Bang Jamin</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default OnboardingScreen;
