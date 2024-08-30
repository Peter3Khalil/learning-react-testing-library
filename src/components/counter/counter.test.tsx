import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Counter from '.';

it('Basic Test', async () => {
  const { container } = render(<Counter />);
  const button = container.querySelector('button') as HTMLButtonElement;
  const p = container.querySelector('p');
  expect(p).toBeDefined();
  expect(p?.innerHTML).toBe('Count: 0');
  expect(button).toBeDefined();
  await userEvent.click(button);
  await userEvent.click(button);
  expect(p?.innerHTML).toBe('Count: 2');
});
