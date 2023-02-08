import React from 'react'
import {
  Text as RNText, TextProps as RNTextProps,
} from 'react-native';

const Text = (props: RNTextProps) => {
  return <RNText style={{ fontFamily: 'Roboto-Sans' }}>{props.children}</RNText>
}

export default Text;