import React from 'react';
import {render, screen} from '@testing-library/react-native';
import PageHeader from '../app/components/pageHeader/PageHeader';

test('the component should be defined and rendered', () => {
  const {container} = render(<PageHeader />);
  const line = screen.getByTestId('header-test');
  expect(container).toBeDefined();
  expect(line).toBeDefined();
});
