import React from 'react';
import { StyleSheet, TextStyle } from 'react-native';
import { Text as PaperText, TextProps } from 'react-native-paper';
import { Color } from '../libs';

const Text = (props: TextProps) => {
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
    color: Color.black2,
    fontFamily: 'Mulish-Regular',
  },
});

export default Text;
