import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { Color } from '../libs/Color';

const HomeScreen = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1 }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          contentContainerStyle={{ backgroundColor: Color.white }}>
          <View style={{ width, height }}>
            <></>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
