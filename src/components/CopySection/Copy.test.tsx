import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';

describe('When the app renders', () => {
  test('it shows the sections', () => {
    render(<App />);
    screen.getByText('(2) Day trip to Samothraki');
    screen.getByText('Bulgarian boat trip');
    screen.getByText('Late night long exposure photos');
    screen.getByText('Views of Thessaloniki');
  });

  test('hides children until click', () => {
    render(<App />);
    const title = screen.getByText('(2) Day trip to Samothraki');
    const child = screen.queryByText('7 hours of ridiculous sea sickness');

    expect(child).toBeNull();

    fireEvent.click(title);

    const childAgain = screen.queryByText('7 hours of ridiculous sea sickness');
    expect(childAgain).toBeTruthy();
  });
});
