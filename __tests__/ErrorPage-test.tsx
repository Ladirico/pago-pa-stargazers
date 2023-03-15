import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ErrorPage from '../app/screens/errorPage/ErrorPage';
import {fireEvent} from 'react-native-testing-library';
const navigation = {navigate: () => jest.fn()};
jest.mock('../app/services/GithubApis');

describe('correct render of all page components', () => {
  test('the component should be defined and rendered', () => {
    const {container} = render(<ErrorPage navigation={navigation} />);
    expect(container).toBeDefined();
  });

  test('text should be defined and render', () => {
    render(<ErrorPage navigation={navigation} />);
    const text = screen.getByText(
      'Sorry, a technical error has occurred. You may have entered a nonexistent username.',
    );
    expect(text).toBeDefined();
  });

  test('button should be defined and render and on click should be navigate', () => {
    render(<ErrorPage navigation={navigation} />);
    const button = screen.getByText('Close');
    expect(button).toBeDefined();
    fireEvent.press(button);
  });
});
