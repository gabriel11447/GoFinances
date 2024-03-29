import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.darkColors.secondary : theme.darkColors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.darkColors.shape : theme.darkColors.title};
`;

export const Icon = styled(Feather) <TypeProps>`
  font-size: ${RFValue(40)}px;
  ${({ type }) => type === 'up' && css`
    color: ${({ theme }) => theme.darkColors.success};
  `};

  ${({ type }) => type === 'down' && css`
    color: ${({ theme }) => theme.darkColors.attention};
  `};

  ${({ type }) => type === 'total' && css`
    color: ${({ theme }) => theme.darkColors.shape};
  `};  
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.darkColors.shape : theme.darkColors.text};
  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === 'total' ? theme.darkColors.shape : theme.darkColors.text_dark};
`;