import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { Divider, Spacer } from '../libs';
import { Color } from '../libs/Color';
import WalletIcon from '../../assets/images/wallet.svg'
import { BoldChillText, Text } from '../components';
import { Button } from 'react-native-paper';

const HomeScreen = () => {
  const { width } = Dimensions.get('window');

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          scrollEventThrottle={16}
          contentContainerStyle={{ backgroundColor: Color.white }}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Color.orange2, Color.orange3]} style={{
            width,
            ...styles.header
          }}>
            <ImageBackground
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
              }}
              source={require('../../assets/images/header.png')}
            >
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>
                  Halo Sahabat</Text>
                <BoldChillText style={styles.headerTextLarge}>Bang Jamin,</BoldChillText>
                <Text style={styles.headerText}>Cari Cuan Yuk</Text>
              </View>
            </ImageBackground>
          </LinearGradient>
          <View style={{
            marginTop: -25,
            marginHorizontal: 16,
            borderRadius: 16,
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: Color.white
          }}>
            <Button
              style={{
                flex: 1,
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                backgroundColor: Color.border,
              }}
              onPress={() => { }}
            >
              <SvgXml xml={WalletIcon} width={24} height={24} />
              <Spacer height={6} />
              <Text>IDR 0 Jt</Text>
            </Button>
            <Divider />
            <Button
              style={{
                flex: 1,
                borderRadius: 0,
                backgroundColor: Color.border,
              }}
              onPress={() => { }}
            >
              <SvgXml xml={WalletIcon} width={24} height={24} />
              <Spacer height={6} />
              <Text>0 Poin</Text>
            </Button>
            <Divider />
            <Button
              style={{
                flex: 1,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderTopRightRadius: 16,
                borderBottomRightRadius: 16,
                backgroundColor: Color.border,
              }}
              onPress={() => { }}
            >
              <SvgXml xml={WalletIcon} width={24} height={24} />
              <Spacer height={6} />
              <Text>0 Sahabat</Text>
            </Button>
          </View>
          <Spacer height={16} />
          <View>
            <></>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 202
  },
  headerTextContainer: {
    marginLeft: 19.19
  },
  headerText: {
    fontSize: 16,
    color: Color.white
  },
  headerTextLarge: {
    fontSize: 22,
    color: Color.white
  }
})

export default HomeScreen;
