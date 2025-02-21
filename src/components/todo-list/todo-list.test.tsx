import { fireEvent, render, screen } from '@testing-library/react';
import TodoList from '.';

beforeEach(() => {
  render(<TodoList />);
});

describe('TodoList', () => {
  it('Add New Todo with button click', () => {
    const inputElement = screen.getByTestId('todo-input');
    const addButton = screen.getByRole('button', { name: /Add/i });
    fireEvent.change(inputElement, {
      target: { value: 'Hello World' },
    });
    fireEvent.click(addButton);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('Add New Todo with Enter key', () => {
    const inputElement = screen.getByTestId('todo-input');
    fireEvent.change(inputElement, {
      target: { value: 'Hello World' },
    });
    fireEvent.keyDown(inputElement, { key: 'Enter' });
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('Remove todo item', () => {
    const inputElement = screen.getByTestId('todo-input');
    const addButton = screen.getByRole('button', { name: /Add/i });
    fireEvent.change(inputElement, {
      target: { value: 'Hello World' },
    });
    fireEvent.click(addButton);
    const removeButton = screen.getByRole('button', { name: /Remove/ });
    expect(screen.getByText('Hello World')).toBeInTheDocument();
    fireEvent.click(removeButton);
    expect(screen.queryByText('Hello World')).not.toBeInTheDocument();
  });
});
