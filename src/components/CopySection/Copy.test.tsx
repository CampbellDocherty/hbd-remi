import { describe, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('When the app renders', () => {
  test('it shows the sections', () => {
    render(<App />);
    screen.getByText('(2) Day trip to Samothraki');
    screen.getByText('Bulgarian boat trip');
    screen.getByText('Late night long exposure photos');
    screen.getByText('Views of Thessaloniki');
  });
});
