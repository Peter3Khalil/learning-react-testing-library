import { fireEvent, render, screen } from '@testing-library/react';
import Button from '.';

describe('Button Component', () => {
  it('should render the button with the text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  it('should call the onClick function when the button is clicked', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('should not call the onClick function when the button is disabled', () => {
    const onClick = jest.fn();
    render(
      <Button onClick={onClick} disabled>
        Click me
      </Button>,
    );
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
    expect(button).toBeDisabled();
  });
});
