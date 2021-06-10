import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.darkColors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.darkColors.primary};
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.darkColors.title};
`;

export const Category = styled(TouchableOpacity)<CategoryProps>`
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ isActive }) =>
    isActive ? theme.darkColors.secondary_light : theme.darkColors.background
  };
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: 16px;
    color: ${({ theme }) => theme.darkColors.text_dark};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.darkColors.text_dark};
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.darkColors.text_dark};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;