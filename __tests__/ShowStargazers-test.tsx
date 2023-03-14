import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import ShowStargazers from '../app/screens/resultPage/components/showStargazers/ShowStargazers';
import {mockGetStargazers} from '../app/utils/mock/ApisResponsesMock';

describe('correct render of all page items', () => {
  test('the component should be defined and rendered', async () => {
    render(<ShowStargazers stargazers={[]} />);
    const button = screen.getByTestId('show-stargazers-button-test');
    expect(button).toBeDefined();
    fireEvent.press(button);
    const containerStars = await screen.getByTestId(
      'container-stargazers-test',
    );
    await expect(containerStars).toBeDefined();
  });
  test('the component should be defined and rendered too all the components', async () => {
    render(<ShowStargazers stargazers={mockGetStargazers} />);
    const button = screen.getByTestId('show-stargazers-button-test');
    expect(button).toBeDefined();
    fireEvent.press(button);
    const containerStars = await screen.getByTestId(
      'container-stargazers-test',
    );
    await expect(containerStars).toBeDefined();
  });
});
