import React from 'react';
import {act, fireEvent, render} from '@testing-library/react-native';
import LoginScreen from '../LoginScreen';
import {expect} from '@jest/globals';

it('renders correctly', () => {
  const {getAllByText, getAllByPlaceholderText} = render(<LoginScreen />);
  expect(getAllByText('Login').length).toBe(2);
  expect(getAllByPlaceholderText('password').length).toBe(1);
  expect(getAllByPlaceholderText('example').length).toBe(1);
});

//Test when username is empty of when username is invalid
it('shows error message when invalid username is entered', () => {
  const {getAllByText, getByTestId} = render(<LoginScreen />);

  fireEvent.changeText(getByTestId('LoginScreen.UsernameInput'), '');
  fireEvent.press(getByTestId('LoginScreen.CustomButton'));

  expect(getAllByText('Invalid Username').length).toBe(1);

  fireEvent.changeText(getByTestId('LoginScreen.UsernameInput'), 'asd');
  fireEvent.press(getByTestId('LoginScreen.CustomButton'));

  expect(getAllByText('Invalid Username').length).toBe(1);
});

//Test when password is empty or when password is invalid
it('shows error message when invalid password is entered', () => {
  const {getAllByText, getByTestId} = render(<LoginScreen />);

  fireEvent.changeText(getByTestId('LoginScreen.PasswordInput'), '');
  fireEvent.press(getByTestId('LoginScreen.CustomButton'));

  expect(getAllByText('Invalid Password').length).toBe(1);

  fireEvent.changeText(getByTestId('LoginScreen.PasswordInput'), 'asd');
  fireEvent.press(getByTestId('LoginScreen.CustomButton'));

  expect(getAllByText('Invalid Password').length).toBe(1);
});

//Test when password and username are both invalid
it('shows error message when invalid username and password is entered', () => {
  const {getAllByText, getByTestId} = render(<LoginScreen />);

  fireEvent.changeText(getByTestId('LoginScreen.PasswordInput'), '');
  fireEvent.changeText(getByTestId('LoginScreen.UsernameInput'), '');
  fireEvent.press(getByTestId('LoginScreen.CustomButton'));

  expect(getAllByText('Invalid Username').length).toBe(1);
  expect(getAllByText('Invalid Password').length).toBe(1);

  fireEvent.changeText(getByTestId('LoginScreen.PasswordInput'), 'asd');
  fireEvent.changeText(getByTestId('LoginScreen.UsernameInput'), 'asd');
  fireEvent.press(getByTestId('LoginScreen.CustomButton'));

  expect(getAllByText('Invalid Username').length).toBe(1);
  expect(getAllByText('Invalid Password').length).toBe(1);
});

//Test when username and password are both valid
it('moves to home screen when valid username and password are entered', async () => {
  fetch.mockResponseOnce(JSON.stringify({status: 'success'}));
  const navigationMock = jest.fn();
  const {getAllByText, getByTestId} = render(
    <LoginScreen navigation={{navigate: navigationMock}} />,
  );
  fireEvent.changeText(getByTestId('LoginScreen.PasswordInput'), 'asdf');
  fireEvent.changeText(getByTestId('LoginScreen.UsernameInput'), 'asdf');
  fireEvent.press(getByTestId('LoginScreen.CustomButton'));

  await act(() => new Promise(resolve => setImmediate(resolve)));

  expect(navigationMock).toBeCalledWith('home');
});
