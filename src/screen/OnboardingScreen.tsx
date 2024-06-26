import React, { useRef } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Spacer } from '../libs';
import { Color } from '../libs/Color';
import PageOneIcon from '../../assets/images/onboarding_page_one.svg';
import PageTwoIcon from '../../assets/images/onboarding_page_two.svg';
import PageThreeIcon from '../../assets/images/onboarding_page_three.svg';
import { ExpandingDot } from 'react-native-animated-pagination-dots';
import { Button } from 'react-native-paper';
import BoldChillText from '../components/BoldChillText';
import RegularChillText from '../components/RegularChillText';
import { useNavigation } from '@react-navigation/native';
import { MainNavigationProp } from '../../router/routerTypes';

type slideDataType = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const OnboardingScreen = () => {
  const navigation = useNavigation<MainNavigationProp>();
  const { width } = Dimensions.get('window');
  const scrollX = useRef(new Animated.Value(0)).current;

  const slides: slideDataType[] = [
    {
      id: 1,
      icon: PageOneIcon,
      title: 'Cuan Gak Pake Modal?',
      description: 'Bisa dong, yuk gabung gratis Jadi sahabat Bang Jamin',
    },
    {
      id: 2,
      icon: PageTwoIcon,
      title: 'Banyak Sahabat\nBanyak Rejeki',
      description: 'Cari cuan makin kenceng dan seru bareng sahabat Bang Jamin',
    },
    {
      id: 3,
      icon: PageThreeIcon,
      title: 'Gampang Urus Klaim',
      description: 'Urus klaim cepet gak pake ribet',
    },
  ];

  const renderItem = ({ item }: { item: slideDataType }) => {
    return (
      <View style={{ width, ...styles.slide }}>
        <View style={styles.svgContainer}>
          <SvgXml xml={item.icon} />
        </View>
        <Spacer height={48} />
        <BoldChillText style={{ ...styles.text, ...styles.title }}>
          {item.title}
        </BoldChillText>
        <Spacer height={14} />
        <RegularChillText style={{ ...styles.text, ...styles.subtitle }}>
          {item.description}
        </RegularChillText>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.flex} />
        <View style={styles.container}>
          <FlatList
            data={slides}
            keyExtractor={S => S.id.toString()}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              },
            )}
            horizontal
            pagingEnabled
            decelerationRate={'normal'}
            scrollEventThrottle={16}
            renderItem={renderItem}
          />
          <Spacer height={52} />
          <ExpandingDot
            data={slides}
            expandingDotWidth={20.5}
            scrollX={scrollX}
            activeDotColor={Color.white}
            inActiveDotColor={Color.white}
            inActiveDotOpacity={0.3}
            dotStyle={styles.dotStyle}
            containerStyle={styles.flex}
          />
        </View>
        <Spacer height={79} />
        <View style={styles.container}>
          <Button
            labelStyle={{ color: Color.orange }}
            style={styles.button}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            LOG IN
          </Button>
        </View>
        <View style={styles.flex} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: Color.orange,
  },
  button: {
    alignSelf: 'stretch',
    marginHorizontal: 29.5,
    backgroundColor: Color.white,
    borderRadius: 8,
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgContainer: {
    width: 390,
    height: 358,
    aspectRatio: 390 / 358,
  },
  text: {
    color: Color.white,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 14,
  },
});

export default OnboardingScreen;
