import React from 'react';
import {ScrollView, Text} from 'react-native/types';
import {Spacer} from '../libs';

const Onboarding = () => {
  return (
    <ScrollView>
      <Text>Cuan Gak Pake Modal?</Text>
      <Spacer height={13} />
      <Text>Bisa dong, yuk gabung gratis Jadi sahabat Bang Jamin</Text>
    </ScrollView>
  );
};

export default Onboarding;
