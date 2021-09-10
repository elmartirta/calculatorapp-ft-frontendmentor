import { render, screen } from '@testing-library/react';
import Calculator from './calculator/Calculator';

test("Add 1 + 1 = 2", () => {
  expect(1+2).toBe(3)
})

test('Renders the word "calc"', () => {
  render(<Calculator/>);
  const calcElement = screen.getByText(/calc/);
  expect(calcElement).toBeInTheDocument();
})
