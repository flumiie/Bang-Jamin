import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Button, } from 'react-native-paper';
import { RouterMainStackProps } from '../../router/MainStack';
import { BoldText, PINInput, Text, TextInput } from '../components';
import { Spacer } from '../libs';
import { Color } from '../libs/Color';

type LoginPINScreenRouteProp = RouteProp<
  RouterMainStackProps,
  'LoginPIN'
>;

const LoginPINScreen = () => {
  const { params } = useRoute<LoginPINScreenRouteProp>();
  const { width, height } = Dimensions.get('window');
  const [keyboardShown, setKeyboardShown] = useState(false)

  useEffect(() => {
    const showKB = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShown(true);
    });
    const hideKB = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShown(false);
    });
    return () => {
      showKB.remove();
      hideKB.remove();
    }
  }, [Keyboard])

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <KeyboardAvoidingView behavior="position">
          <View style={{
            width,
            height,
            ...styles.contentContainer,
          }}>
            <View style={{ flex: 1 }} />
            <View style={{
              width,
              paddingHorizontal: 16,
              alignItems: 'center',
            }}>
              <Image source={require('../../assets/images/logo.png')} />
              <Spacer height={34} />
              <BoldText style={{ fontSize: 24 }}>Enter Bang Jamin PIN</BoldText>
              <Spacer height={7} />
              <Text>{params.email}</Text>
              <Spacer height={34} />
              <View style={{ flexDirection: 'row' }}>
                <PINInput />
                <Spacer width={8} />
                <PINInput />
                <Spacer width={8} />
                <PINInput />
                <Spacer width={8} />
                <PINInput />
                <Spacer width={8} />
                <PINInput />
                <Spacer width={8} />
                <PINInput />
              </View>
              <Spacer height={33} />
              <Button
                labelStyle={{ color: Color.white }}
                style={styles.button}
                onPress={() => { }}>
                Continue
              </Button>
            </View>
            <View style={keyboardShown ? { height: height / 7 } : { flex: 1 }} />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'space-between',
    backgroundColor: Color.white
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: Color.orange
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: Color.orange,
    borderRadius: 8,
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 4
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgContainer: {
    width: 390,
    height: 358,
    aspectRatio: 390 / 358
  },
  text: {
    color: Color.white,
    textAlign: 'center',
    paddingHorizontal: 32
  }
});


export default LoginPINScreen;
