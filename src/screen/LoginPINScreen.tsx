import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput as RNTextInput,
  View,
} from 'react-native';
import { Button, } from 'react-native-paper';
import { RouterMainStackProps } from '../../router/MainStack';
import { MainNavigationProp } from '../../router/routerTypes';
import { BoldText, PINInput, Text } from '../components';
import { Spacer } from '../libs';
import { Color } from '../libs/Color';

type LoginPINScreenRouteProp = RouteProp<
  RouterMainStackProps,
  'LoginPIN'
>;

const mockPIN = '901234';

const LoginPINScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();
  const { params } = useRoute<LoginPINScreenRouteProp>();
  const { width, height } = Dimensions.get('window');
  const [keyboardShown, setKeyboardShown] = useState(false)
  const [pinInput, setPinInput] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    f: '',
  })

  const result = `${pinInput.a}${pinInput.b}${pinInput.c}${pinInput.d}${pinInput.e}${pinInput.f}`

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

  useEffect(() => { console.warn(result.length < 6) }, [pinInput])

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
              <Text style={{ color: Color.subGrey }}>{params.email}</Text>
              <Spacer height={34} />
              <View style={{ flexDirection: 'row' }}>
                <PINInput
                  defaultValue={pinInput.a}
                  onChangeText={(v) => {
                    setPinInput({ ...pinInput, a: v })
                  }}
                />
                <Spacer width={8} />
                <PINInput
                  defaultValue={pinInput.b}
                  onChangeText={(v) => {
                    setPinInput({ ...pinInput, b: v })
                  }}
                />
                <Spacer width={8} />
                <PINInput
                  defaultValue={pinInput.c}
                  onChangeText={(v) => {
                    setPinInput({ ...pinInput, c: v })
                  }}
                />
                <Spacer width={8} />
                <PINInput
                  defaultValue={pinInput.d}
                  onChangeText={(v) => {
                    setPinInput({ ...pinInput, d: v })
                  }}
                />
                <Spacer width={8} />
                <PINInput
                  defaultValue={pinInput.e}
                  onChangeText={(v) => {
                    setPinInput({ ...pinInput, e: v })
                  }}
                />
                <Spacer width={8} />
                <PINInput
                  defaultValue={pinInput.f}
                  onChangeText={(v) => {
                    setPinInput({ ...pinInput, f: v })
                  }}
                />
              </View>
              <Spacer height={33} />
              <Button
                labelStyle={{ color: Color.white }}
                style={{
                  ...styles.button,
                  backgroundColor: result.length < 6 ? Color.lightGrey : Color.orange
                }}
                disabled={result.length < 6}
                onPress={() => {
                  if (result === mockPIN) {
                    /*
                     * Only mock, won't work for now
                     * Please set isLogin: true in {data}, inside MainStack.tsx
                     */
                    navigation.navigate('Home');
                  }
                }}>
                Continue
              </Button>
            </View>
            <View style={keyboardShown ? { height: height / 6 } : { flex: 1 }} />
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
