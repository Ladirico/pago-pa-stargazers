import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {fireEvent} from 'react-native-testing-library';
import SearchPage from '../app/screens/searchPage/SearchPage';
import {mockGetUserInfoResult} from '../app/utils/mock/ApisResponsesMock';

const navigation = {navigate: () => jest.fn()};
let mockResolveGetUserInfo: boolean;

jest.mock('../app/services/GithubApis', () => ({
  ...jest.requireActual('../app/services/GithubApis'),
  getUserInfo: () =>
    new Promise((resolve, reject) => {
      mockResolveGetUserInfo ? resolve(mockGetUserInfoResult) : reject('error');
    }),
}));

describe('correct render of all page components', () => {
  test('the component should be defined and rendered', () => {
    const {container} = render(<SearchPage navigation={navigation} />);
    expect(container).toBeDefined();
  });

  test('text should be defined and render', () => {
    render(<SearchPage navigation={navigation} />);
    const text = screen.getByText('Stalking Favs');
    expect(text).toBeDefined();
  });

  test('button should be defined and render and on click should be navigate', () => {
    mockResolveGetUserInfo = true;
    render(<SearchPage navigation={navigation} />);
    const button = screen.getByText('Start Stalking');
    const input = screen.getByTestId('input-test');
    expect(input).toBeDefined();
    fireEvent.changeText(input, 'a');
    expect(button).toBeDefined();
    fireEvent.press(button);
  });

  test('button should be defined and render and on click api on catch', () => {
    mockResolveGetUserInfo = false;
    render(<SearchPage navigation={navigation} />);
    const button = screen.getByText('Start Stalking');
    const input = screen.getByTestId('input-test');
    expect(input).toBeDefined();
    fireEvent.changeText(input, 'a');
    expect(button).toBeDefined();
    fireEvent.press(button);
  });
});
