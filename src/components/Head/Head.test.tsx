import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('When the app renders', () => {
  test('it shows the title', () => {
    render(<App />);
    screen.getByText('Happy Birthday Remi!');
    screen.getByText(
      'A digital retelling of our trip to Thassos + Samothraki!',
    );
  });
});
