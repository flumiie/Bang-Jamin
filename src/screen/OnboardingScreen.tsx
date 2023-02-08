import React, { useRef } from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Spacer } from '../libs';
import { Color } from '../libs/Color';
import PageOneIcon from '../../assets/images/onboarding_page_one.svg';
import PageTwoIcon from '../../assets/images/onboarding_page_two.svg';
import PageThreeIcon from '../../assets/images/onboarding_page_three.svg';
import { LiquidLike as LiquidDots } from 'react-native-animated-pagination-dots';
import { Button } from 'react-native-paper';

type slideDataType = {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const OnboardingScreen = () => {
  const { width, height } = Dimensions.get('window');
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollOffset = useRef(new Animated.Value(0)).current;

  const slides: slideDataType[] = [
    {
      id: 1,
      icon: PageOneIcon,
      title: 'Cuan Gak Pake Modal?',
      description:
        'Bisa dong, yuk gabung gratis Jadi sahabat Bang Jamin',
    },
    {
      id: 2,
      icon: PageTwoIcon,
      title: 'Banyak Sahabat\nBanyak Rejeki',
      description:
        'Cari cuan makin kenceng dan seru bareng sahabat Bang Jamin',
    },
    {
      id: 3,
      icon: PageThreeIcon,
      title: 'Gampang Urus Klaim',
      description: 'Urus klaim cepet gak pake ribet',
    },
  ];

  const renderItem = ({
    item,
  }: {
    item: slideDataType
  }) => {
    return (
      <View
        style={{
          width,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SvgXml xml={item.icon} />
        <Spacer height={48} />
        <Text style={{ color: Color.white }}>{item.title}</Text>
        <Spacer height={14} />
        <Text style={{ color: Color.white }}>{item.description}</Text>
      </View>
    )
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.orange }}>
        <View style={{ flex: 1 }} />
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <FlatList
            data={slides}
            keyExtractor={S => S.id.toString()}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            pagingEnabled
            horizontal
            decelerationRate={'normal'}
            scrollEventThrottle={16}
            renderItem={renderItem}
          />
          <Spacer height={26} />
          <LiquidDots
            data={slides}
            scrollX={scrollX}
            scrollOffset={scrollOffset}
            bigHead={true}
            dotSize={18}
            inActiveDotOpacity={0.2}
            activeDotColor={'#fff'}
            containerStyle={{ flex: 1 }}
          />
          <Spacer height={79} />
          <Button
            labelStyle={{ color: Color.orange }}
            onPress={() => {
              //
            }}>
            LOG IN
          </Button>
        </View>
        <View style={{ flex: 1 }} />
      </SafeAreaView>
    </>
  );
};

// const styles = StyleSheet.create({
//   content: {
//     flex: 1,
//     backgroundColor: Colors.lighter,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default OnboardingScreen;
