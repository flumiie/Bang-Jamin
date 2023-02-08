import React, { useState } from 'react'
import { TextInput as PaperTextInput, TextInputProps } from 'react-native-paper';
import { Color } from '../libs/Color';

const PINInput = (props: TextInputProps) => {
  const [isFocus, setFocus] = useState(false);

  return <PaperTextInput
    style={{
      width: 48,
      height: 48,
      backgroundColor: Color.white,
      textAlign: 'center',
    }}
    outlineStyle={{
      borderRadius: 8,
      borderColor: props.error ? Color.red : Color.subGrey
    }}
    textColor={Color.black}
    cursorColor={Color.black}
    mode="outlined"
    maxLength={1}
    numberOfLines={1}
    keyboardType="number-pad"
    {...props}
  >
    {props.children}
  </PaperTextInput>
}
export default PINInput;