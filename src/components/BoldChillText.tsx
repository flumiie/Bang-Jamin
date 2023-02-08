import React from 'react'
import { TextStyle } from 'react-native';
import { Text as PaperText, TextProps } from 'react-native-paper';

const BoldChillText = (props: TextProps) => {
  return <PaperText style={{ fontFamily: 'Chillax-Bold', ...props.style as TextStyle }}>{props.children}</PaperText>
}

export default BoldChillText;