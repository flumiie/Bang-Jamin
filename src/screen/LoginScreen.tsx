import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
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
import { Button } from 'react-native-paper';
import { MainNavigationProp } from '../../router/routerTypes';
import { BoldText, Text, TextInput } from '../components';
import { Spacer } from '../libs';
import { Color } from '../libs/Color';

const LoginScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();
  const { width, height } = Dimensions.get('window');

  const InputSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .email('Wrong email format'),
  });

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView>
        <KeyboardAvoidingView behavior="position">
          <Formik
            initialValues={{ email: '' }}
            validationSchema={InputSchema}
            onSubmit={vars => {
              Keyboard.dismiss();
              navigation.navigate('LoginPIN', {
                email: vars.email,
              });
            }}>
            {({ handleSubmit, handleChange, errors, values, touched }) => (
              <View
                style={{
                  width,
                  height,
                  ...styles.formContainer,
                }}>
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={require('../../assets/images/login_background.png')}
                />
                <Spacer height={12} />
                <View style={styles.contentContainer}>
                  <Image source={require('../../assets/images/logo.png')} />
                  <Spacer height={16} />
                  <BoldText style={styles.viaEmail}>Login via Email</BoldText>
                  <Spacer height={16} />
                  <TextInput
                    placeholder="tony@bangjamin.com"
                    value={values.email}
                    error={touched.email && !!errors.email}
                    onChangeText={handleChange('email')}
                  />
                  <Spacer height={16} />
                  <Button
                    labelStyle={{ color: Color.white }}
                    style={styles.button}
                    disabled={!values.email}
                    onPress={handleSubmit}>
                    Continue
                  </Button>
                  <Spacer height={16} />
                  <Text style={styles.tnc}>
                    By clicking continue, you agree to our{' '}
                    <Text style={{ color: Color.orange }} onPress={() => {}}>
                      Terms of Use
                    </Text>{' '}
                    and acknowledge that you have read our{' '}
                    <Text style={{ color: Color.orange }} onPress={() => {}}>
                      Privacy Policy
                    </Text>
                    .
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: Color.orange,
    borderRadius: 8,
  },
  formContainer: {
    justifyContent: 'space-between',
    backgroundColor: Color.white,
  },
  viaEmail: {
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: '65%',
  },
  tnc: {
    textAlign: 'center',
    fontSize: 10,
  },
});

export default LoginScreen;
