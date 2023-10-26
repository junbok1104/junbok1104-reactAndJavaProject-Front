import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import * as renderer from 'react-test-renderer';
import AddCar from './AddCar';

test('render a snapshot', () => {
  const tree = renderer.create(<AddCar/>).toJSON();
  expect(tree).toMatchSnapshot();
});

