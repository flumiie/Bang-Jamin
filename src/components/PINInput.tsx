import React from 'react'
import { TextInput as PaperTextInput, TextInputProps } from 'react-native-paper';
import { Color } from '../libs/Color';

const PINInput = (props: TextInputProps) => {
  return <PaperTextInput
    style={{
      width: 48,
      height: 48,
      backgroundColor: Color.white,
      textAlign: 'center',
    }}
    outlineStyle={{
      borderRadius: 8,
      borderColor: props.error ? Color.red : Color.orange
    }}
    textColor={Color.black}
    cursorColor={Color.black}
    mode="outlined"
    {...props}
  >
    {props.children}
  </PaperTextInput>
}
export default PINInput;