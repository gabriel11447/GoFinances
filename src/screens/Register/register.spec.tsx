import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import Register from '.';
import theme from '../../global/styles/theme';

jest.mock('@react-navigation/native');

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    { children }
  </ThemeProvider>
);

describe('Register Screen', () => {
  it('should open category modal when button clicked', async () => {
    const { getByTestId } = render(
      <Register />,
      {
        wrapper: Providers
      }
    );

    act(() => fireEvent.press(getByTestId('button-category')));

    await waitFor(() => {
      expect(getByTestId('modal-category').props.visible).toBeTruthy();
    });
  });
});