import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { Text as PaperText, TextProps } from 'react-native-paper';

const BoldChillText = (props: TextProps) => {
  return (
    <PaperText
      style={{
        ...styles.font,
        ...(props.style as TextStyle),
      }}>
      {props.children}
    </PaperText>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: 'Chillax-Bold',
  },
});

export default BoldChillText;
