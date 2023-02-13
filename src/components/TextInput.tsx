import React from 'react';
import {
  TextInput as PaperTextInput,
  TextInputProps,
} from 'react-native-paper';
import { Color } from '../libs/Color';

const TextInput = (props: TextInputProps) => {
  return (
    <PaperTextInput
      style={{ backgroundColor: Color.white }}
      outlineStyle={{ borderColor: props.error ? Color.red : Color.orange }}
      textColor={Color.black}
      cursorColor={Color.black}
      mode="outlined"
      {...props}>
      {props.children}
    </PaperTextInput>
  );
};
export default TextInput;
