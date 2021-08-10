import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import InputField from '../../components/inputField';
import CustomButton from '../../components/customButton';
import ErrorMessages from '../../components/errorsArea';

const LoginScreen = ({navigation}) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userNameErrorMsg, setUserNameErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [userNameValid, setUserNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const handleLogin = () => {
    if (userName.length < 4) setUserNameErrorMsg('Invalid Username');
    if (password.length < 4) setPasswordErrorMsg('Invalid Password');
    if (userNameValid && passwordValid) {
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          userName,
          password,
        }),
      })
        .then(res => res.json())
        .then(json => navigation.navigate('home'))
        .catch(err => console.log('An error occurred', err));
    }
  };

  const handleUsernameTextChange = val => {
    setUsername(val);
    setUserNameErrorMsg('');
    val.length < 4 ? setUserNameValid(false) : setUserNameValid(true);
  };
  const handlePasswordTextChange = val => {
    setPassword(val);
    setPasswordErrorMsg('');
    val.length < 4 ? setPasswordValid(false) : setPasswordValid(true);
  };

  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.viewStyle}>
        <Text style={styles.headerStyle}>Login</Text>
        <InputField
          placeholder="example"
          label="Username"
          value={userName}
          onChangeText={handleUsernameTextChange}
          error={userNameErrorMsg}
          testID="LoginScreen.UsernameInput"
        />
        <InputField
          placeholder="password"
          label="Password"
          value={password}
          onChangeText={handlePasswordTextChange}
          error={passwordErrorMsg}
          testID="LoginScreen.PasswordInput"
          secureTextEntry
        />
        <CustomButton
          buttonText="Login"
          onPress={handleLogin}
          testID="LoginScreen.CustomButton"
        />
        <ErrorMessages errorMessages={[userNameErrorMsg, passwordErrorMsg]} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  viewStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  safeAreaStyle: {
    flex: 1,
  },
  headerStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 25,
  },
});
