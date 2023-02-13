import React from 'react';
import { StyleSheet } from 'react-native';
import {
  TextInput as PaperTextInput,
  TextInputProps,
} from 'react-native-paper';
import { Color } from '../libs/Color';

const PINInput = (props: TextInputProps) => {
  return (
    <PaperTextInput
      style={styles.textInput}
      // eslint-disable-next-line react-native/no-inline-styles
      outlineStyle={{
        borderRadius: 8,
      }}
      outlineColor={Color.border}
      activeOutlineColor={Color.orange}
      textColor={Color.black}
      cursorColor={Color.black}
      mode="outlined"
      maxLength={1}
      numberOfLines={1}
      keyboardType="number-pad"
      {...props}>
      {props.children}
    </PaperTextInput>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: 48,
    height: 48,
    backgroundColor: Color.white,
    textAlign: 'center',
  },
});

export default PINInput;
