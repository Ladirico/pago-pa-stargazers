import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Line from '../app/components/line/Line';

test('the component should be defined and rendered', () => {
  const {container} = render(<Line />);
  const line = screen.getByTestId('line-test');
  expect(container).toBeDefined();
  expect(line).toBeDefined();
});
