import { screen } from '@testing-library/react';

test('1 test: renders learn react link', () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  console.log("1 passed");
});

test('2 test: second test', () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  console.log("2 passed");
});
