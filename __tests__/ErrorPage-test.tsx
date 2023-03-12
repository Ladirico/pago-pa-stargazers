import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ErrorPage from '../src/pages/errorPage/ErrorPage';
import {fireEvent} from 'react-native-testing-library';
const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

test('the component should be defined and rendered', () => {
  const {container} = render(<ErrorPage />);
  const wrapper = screen.getByTestId('error-page-test');
  //   const text = screen.getByText('Close');
  //   expect(text).toBeDefined();
  //   fireEvent.press(text);
  expect(container).toBeDefined();
  expect(wrapper).toBeDefined();
});
