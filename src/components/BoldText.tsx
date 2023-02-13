import React from 'react';
import { StyleSheet } from 'react-native';
import { Text as PaperText, TextProps } from 'react-native-paper';
import { TextStyle } from 'react-native/types';
import { Color } from '../libs';

const BoldText = (props: TextProps) => {
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
    color: Color.black,
    fontFamily: 'Mulish-Bold',
  },
});

export default BoldText;
