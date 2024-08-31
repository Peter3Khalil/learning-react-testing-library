import { screen, render, fireEvent } from '@testing-library/react';
import ExtendableText from '.';

const limit = 255;
const shortText = 'p'.repeat(limit);
const longText = 'p'.repeat(limit + 1);
const truncatedText = longText.substring(0, limit) + '...';

describe('ExtendableText', () => {
  it('Should render text if text <= 255', () => {
    render(<ExtendableText text={shortText} />);
    expect(screen.getByText(shortText)).toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('Should truncate text if text > 255', () => {
    render(<ExtendableText text={longText} />);
    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    screen.getByRole('button', { name: /more/i });
  });

  it('Should expand text when show more button is clicked', () => {
    render(<ExtendableText text={longText} />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/more/i);
    fireEvent.click(button);
    expect(screen.getByText(longText)).toBeInTheDocument();
    expect(button).toHaveTextContent(/less/i);
  });

  it('Should collapse text when show less button is clicked', () => {
    render(<ExtendableText text={longText} />);
    const showMoreBtn = screen.getByRole('button', { name: /more/i });
    fireEvent.click(showMoreBtn);

    const showLessBtn = screen.getByRole('button', { name: /less/i });
    fireEvent.click(showLessBtn);

    expect(screen.getByText(truncatedText)).toBeInTheDocument();
    expect(showMoreBtn).toHaveTextContent(/more/i);
  });
});
