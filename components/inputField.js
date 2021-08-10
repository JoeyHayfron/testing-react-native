import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const InputField = ({label, placeholder, ...props}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{label}</Text>
      <TextInput
        {...props}
        style={styles.inputStyle}
        placeholder={placeholder}
        placeholderTextColor="#cecfd1"
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    height: 30,
    backgroundColor: '#f5f6f8',
    marginTop: 4,
  },
  viewStyle: {
    backgroundColor: '#f5f6f8',
    borderRadius: 10,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    marginBottom: 10,
  },
  textStyle: {
    fontWeight: 'bold',
    color: '#cecfd1',
  },
});
