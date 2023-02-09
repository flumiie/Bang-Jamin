import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Divider, Icon, Spacer } from '../libs';
import { Color } from '../libs/Color';
import { BoldChillText, BoldText, Text } from '../components';
import { SvgXml } from 'react-native-svg';

import WalletIcon from '../../assets/images/wallet.svg';
import PoinIcon from '../../assets/images/poin.svg';
import PeopleIcon from '../../assets/images/people.svg';
import SupportIcon from '../../assets/images/support.svg';
import AddIcon from '../../assets/images/add.svg';
import CarIcon from '../../assets/images/car.svg';
import BikeIcon from '../../assets/images/bike.svg';
import TruckIcon from '../../assets/images/truck.svg';
import WandIcon from '../../assets/images/magic_wand.svg';
import CommissionIcon from '../../assets/images/commission.svg';
import ShieldIcon from '../../assets/images/shield.svg';
import { AvailableFeatures } from '../libs/types';
import { useNavigation } from '@react-navigation/native';
import { MainNavigationProp } from '../../router/routerTypes';

const HomeScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();
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
          <View style={{ marginHorizontal: 16 }}>
            <View style={{
              marginTop: -25,
              borderRadius: 16,
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: Color.white,
              elevation: 7,
              shadowColor: Color.black,
              shadowOffset: {
                width: 0,
                height: -5,
              },
              shadowOpacity: 0.1,
              shadowRadius: 7,
            }}>
              <Pressable
                style={{
                  flex: 1,
                  borderTopLeftRadius: 16,
                  borderBottomLeftRadius: 16,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                onPress={() => { }}
              >
                <View style={{ paddingHorizontal: 16, paddingVertical: 18 }}>
                  <SvgXml xml={WalletIcon} width={24} />
                  <Spacer height={6} />
                  <Text>IDR 0 Jt</Text>
                </View>
              </Pressable>
              <Divider />
              <Pressable
                style={{
                  flex: 1,
                  borderRadius: 0,
                }}
                onPress={() => { }}
              >
                <View style={{ paddingHorizontal: 16, paddingVertical: 18 }}>
                  <SvgXml xml={PoinIcon} width={24} />
                  <Spacer height={6} />
                  <Text>0 Poin</Text>
                </View>
              </Pressable>
              <Divider />
              <Pressable
                style={{
                  flex: 1,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderTopRightRadius: 16,
                  borderBottomRightRadius: 16,
                }}
                onPress={() => { }}
              >
                <View style={{ paddingHorizontal: 16, paddingVertical: 18 }}>
                  <SvgXml xml={PeopleIcon} width={24} />
                  <Spacer height={6} />
                  <Text>0 Sahabat</Text>
                </View>
              </Pressable>
            </View>

            <Spacer height={16} />

            <Pressable onPress={() => { }}>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: Color.border,
                paddingVertical: 20,
                paddingHorizontal: 16,
                borderRadius: 16,
              }}>
                <SvgXml xml={SupportIcon} width={31} height={31} />
                <View style={{ flex: 1, marginHorizontal: 12 }}>
                  <BoldText>Yuk Undang Sahabat!</BoldText>
                  <Spacer height={2} />
                  <Text>Cari cuan bareng sahabat kamu</Text>
                </View>
                <SvgXml xml={AddIcon} width={31} height={31} />
              </View>
            </Pressable>

            <Spacer height={22} />

            <BoldText style={{ fontSize: 16 }}>Produk Asuransi</BoldText>
            <Spacer height={4} />
            <Text style={{ color: Color.lightGrey2 }}>Pilih produk asuransi yang di butuhkan</Text>
            <Spacer height={22} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Pressable
                onPress={() => {
                  // navigation.navigate('CarAssurance')
                }}
                style={{ paddingHorizontal: 21, alignItems: 'center' }}
              >
                <SvgXml xml={CarIcon} width={58} height={58} />
                <Spacer height={8} />
                <Text>Mobil</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  // navigation.navigate('BikeAssurance')
                }}
                style={{ paddingHorizontal: 21, alignItems: 'center' }}
              >
                <SvgXml xml={BikeIcon} width={58} height={58} />
                <Spacer height={8} />
                <Text>Motor</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  // navigation.navigate('TruckAssurance')
                }}
                style={{ paddingHorizontal: 21, alignItems: 'center' }}
              >
                <SvgXml xml={TruckIcon} width={58} height={58} />
                <Spacer height={8} />
                <Text>Truk</Text>
              </Pressable>
            </View>

            <Spacer height={22} />

            <BoldText style={{ fontSize: 16 }}>Ruang Kerja</BoldText>
            <Spacer height={4} />
            <Text style={{ color: Color.lightGrey2 }}>Cek status polis, klaim dan penarikan komisi</Text>
            <Spacer height={22} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Pressable
                onPress={() => {
                  // navigation.navigate('Sales')
                }}
                style={{ paddingHorizontal: 21, alignItems: 'center' }}
              >
                <SvgXml xml={WandIcon} width={58} height={58} />
                <Spacer height={8} />
                <Text>Penjualan</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  // navigation.navigate('CommissionRevenue')
                }}
                style={{ paddingHorizontal: 21, alignItems: 'center' }}
              >
                <SvgXml xml={CommissionIcon} width={58} height={58} />
                <Spacer height={8} />
                <Text>Tarik Komisi</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('Clients');
                }}
                style={{ paddingHorizontal: 21, alignItems: 'center' }}
              >
                <SvgXml xml={ShieldIcon} width={58} height={58} />
                <Spacer height={8} />
                <Text>Nasabah</Text>
              </Pressable>
            </View>
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
