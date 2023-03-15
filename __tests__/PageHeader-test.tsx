import React from 'react';
import {render} from '@testing-library/react-native';
import PageHeader from '../app/components/pageHeader/PageHeader';

test('the component should be defined and rendered', () => {
  const {container} = render(<PageHeader />);
  expect(container).toBeDefined();
});
