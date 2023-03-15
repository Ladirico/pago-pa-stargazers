import React from 'react';
import {render, screen} from '@testing-library/react-native';
import SingleItem from '../app/screens/resultPage/components/singleItem/SingleItem';

describe('correct render of all page items', () => {
  test('the component should be defined and rendered', () => {
    const {container} = render(
      <SingleItem isStarWrapper={true} text="text" avatarUrl="" />,
    );
    const starText = screen.getByTestId('star-text-test');
    expect(starText).toBeDefined();
    expect(container).toBeDefined();
  });
  test('the component should be defined and rendered and is not star item ', () => {
    render(<SingleItem text="text" avatarUrl="" />);
    const image = screen.getByTestId('image-test');
    expect(image).toBeDefined();
  });
});
