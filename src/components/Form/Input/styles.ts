import styled from 'styled-components/native';
import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  padding: 18px 16px;
  color: ${({ theme }) => theme.darkColors.text_dark};
  background-color: ${({ theme }) => theme.darkColors.shape};
  border-radius: 5px;
  margin-bottom: 8px;
`;