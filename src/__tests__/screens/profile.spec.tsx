import React from 'react';
import { render } from '@testing-library/react-native';

import Profile from '../../screens/Profile';

describe('Profile Screen', () => {
  it('should show correct placeholder for user name input', () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText('Nome');

    expect(inputName).toBeTruthy();
  });

  it('should load user data', () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId('input-name');
    const inputSurname = getByTestId('input-surname');

    expect(inputName.props.value).toEqual('Gabriel');
    expect(inputSurname.props.value).toEqual('Carvalho');
  });

  it('should render title', () => {
    const { getByTestId } = render(<Profile />);

    const textTitle = getByTestId('text-title');

    expect(textTitle.props.children).toContain('Perfil');
  });
});
