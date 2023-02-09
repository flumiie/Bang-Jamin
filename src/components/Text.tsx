import React from 'react'
import { Text as PaperText, TextProps } from 'react-native-paper';
import { Color } from '../libs';

const Text = (props: TextProps) => {
  return <PaperText style={{
    color: Color.black2,
    fontFamily: 'Mulish-Regular',
    ...props.style as TextStyle
  }}>{props.children}</PaperText>
}

export default Text;