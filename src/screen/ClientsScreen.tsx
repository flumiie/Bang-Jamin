import React from 'react';
import { FlatList, SafeAreaView, StatusBar, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Color } from '../libs/Color';

import { AvailableFeatures } from '../libs/types';
import CarIcon from '../../assets/images/car.svg';
import BikeIcon from '../../assets/images/bike.svg';
import TruckIcon from '../../assets/images/truck.svg';
import WandIcon from '../../assets/images/magic_wand.svg';
import CommissionIcon from '../../assets/images/commission.svg';
import ShieldIcon from '../../assets/images/shield.svg';
import { BoldText, Text } from '../components';
import { HorizontalDivider, Spacer, Toolbar } from '../libs';

type ClientDataType = {
  id: string;
  clientName: string;
  clientEmail: string;
  type: AvailableFeatures;
};

const ClientsScreen = () => {
  const mockData: ClientDataType[] = [
    {
      id: '1',
      clientName: 'Andre G',
      clientEmail: 'andre.g@bangjamin.com',
      type: 'Car_Assurance',
    },
    {
      id: '2',
      clientName: 'Baudy',
      clientEmail: 'baudy@bangjamin.com',
      type: 'Bike_Assurance',
    },
  ];

  const renderItem = ({ item }: { item: ClientDataType }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 16,
          alignItems: 'center',
        }}>
        <IconRender type={item.type} />
        <Spacer width={18} />
        <View>
          <Text style={{ color: Color.black }}>{item.clientName}</Text>
          <BoldText>{item.clientEmail}</BoldText>
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.white }}>
        <Toolbar title="Nasabah" />
        <FlatList
          data={mockData}
          scrollEventThrottle={16}
          renderItem={renderItem}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          ItemSeparatorComponent={() => <HorizontalDivider />}
        />
        <HorizontalDivider />
      </SafeAreaView>
    </>
  );
};

const IconRender: React.FC<{ type: AvailableFeatures | null }> = ({ type }) => {
  if (type === 'Car_Assurance') {
    return <SvgXml xml={CarIcon} width={48} height={48} />;
  }
  if (type === 'Bike_Assurance') {
    return <SvgXml xml={BikeIcon} width={48} height={48} />;
  }
  if (type === 'Truck_Assurance') {
    return <SvgXml xml={TruckIcon} width={48} height={48} />;
  }
  if (type === 'Sales') {
    return <SvgXml xml={WandIcon} width={48} height={48} />;
  }
  if (type === 'Commission_Revenue') {
    return <SvgXml xml={CommissionIcon} width={48} height={48} />;
  }
  if (type === 'Client') {
    return <SvgXml xml={ShieldIcon} width={48} height={48} />;
  }
  return <Spacer width={48} />;
};

export default ClientsScreen;
