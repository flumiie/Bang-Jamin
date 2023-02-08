import React from 'react'
import { Text as PaperText, TextProps } from 'react-native-paper';
import { TextStyle } from 'react-native/types';
import { Color } from '../libs';

const BoldText = (props: TextProps) => {
  return <PaperText style={{
    color: Color.black,
    fontFamily: 'Mulish-Bold',
    ...props.style as TextStyle
  }}>{props.children}</PaperText>
}

export default BoldText;