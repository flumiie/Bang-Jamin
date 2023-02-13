import React from 'react';
import { TextStyle } from 'react-native';
import { Text as PaperText, TextProps } from 'react-native-paper';

const RegularChillText = (props: TextProps) => {
  return (
    <PaperText
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        fontFamily: 'Chillax-Regular',
        ...(props.style as TextStyle),
      }}>
      {props.children}
    </PaperText>
  );
};

export default RegularChillText;
