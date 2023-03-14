import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import ShowStargazers from '../app/screens/resultPage/components/showStargazers/ShowStargazers';

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
  //   test('the component should be defined and rendered and is not star item ', () => {
  //     render(<SingleItem text="text" avatarUrl="" />);
  //     const starText = screen.getByTestId('star-text-test');
  //     const image = screen.getByTestId('image-test');
  //     expect(image).toBeDefined();
  //     expect(starText).not.toBeDefined();
  //   });
});
