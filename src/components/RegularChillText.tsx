import React from 'react'
import {
  Text as RNText, TextProps as RNTextProps, TextStyle,
} from 'react-native';

const RegularChillText = (props: RNTextProps) => {
  return <RNText style={{
    fontFamily: 'Chillax-Regular', ...props.style as TextStyle
  }}>{props.children}</RNText>
}

export default RegularChillText;