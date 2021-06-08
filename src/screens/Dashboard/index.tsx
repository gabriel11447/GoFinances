import React from 'react';
import HighlightCard from '../../components/HighlightCard';
import TransactionCard, { TransactionCardProps } from '../../components/TransactionCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export default function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de app",
      amount:"R$ 12.000,00",
      category: {
        name: 'Vendas',
        icon: 'dollar-sign'
      },
      date:"03/05/2021"
    },
    {
      id: '2',
      type: 'negative',
      title: "Pizzaria Pizzy",
      amount:"R$ 50,00",
      category: {
        name: 'Alimentação',
        icon: 'coffee'
      },
      date:"10/05/2021"
    },
    {
      id: '3',
      type: 'negative',
      title: "Aluguel",
      amount:"R$ 800,00",
      category: {
        name: 'Compras',
        icon: 'shopping-bag'
      },
      date:"15/05/2021"
    },
];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
            source={{ uri: 'https://avatars.githubusercontent.com/u/37315220?v=4'}}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Gabriel</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 12.500,00"
          lastTransaction="Última entrada dia 27 de maio"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.200,00"
          lastTransaction="Última saída dia 15 de maio"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 11.300,00"
          lastTransaction="01 a 29 de maio"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
        
      </Transactions>

    </Container>
  );
}
