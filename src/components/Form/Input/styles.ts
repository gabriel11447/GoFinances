import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  active: boolean;
}

export const Container = styled(TextInput) <Props>`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  padding: 18px 16px;
  color: ${({ theme }) => theme.darkColors.text_dark};
  background-color: ${({ theme }) => theme.darkColors.shape};
  border-radius: 5px;
  margin-bottom: 8px;
  ${({ active, theme }) => active && css`
    border-width: 3px;
    border-color: ${theme.colors.attention};
  `};
`;