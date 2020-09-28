import React from 'react';
import App from '../../App';
import renderer from 'react-test-renderer';
import ThemeContextProvider from '../ThemeContext';

it('renders correctly', () => {
  const tree = renderer
    .create(<ThemeContextProvider><App /></ThemeContextProvider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});