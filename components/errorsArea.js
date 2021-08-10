import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ErrorMessages = ({errorMessages}) => {
  return (
    <View>
      {errorMessages
        ? errorMessages.map((item, index) => (
            <Text style={styles.textStyle} key={index}>
              {item}
            </Text>
          ))
        : null}
    </View>
  );
};

export default ErrorMessages;

const styles = StyleSheet.create({
  textStyle: {
    color: 'red',
    fontSize: 12,
  },
});
