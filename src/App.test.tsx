import React from 'react';
import { render, screen } from '@testing-library/react';
import UnauthApp from './App';

test('renders learn react link', () => {
  render(<UnauthApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
