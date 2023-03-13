import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ErrorPage from '../app/screens/errorPage/ErrorPage';
// import {fireEvent} from 'react-native-testing-library';

test('the component should be defined and rendered', () => {
  const {container} = render(<ErrorPage navigation={{navigate: jest.fn()}} />);
  const wrapper = screen.getByTestId('error-page-test');
  expect(container).toBeDefined();
  expect(wrapper).toBeDefined();
});
