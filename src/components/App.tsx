import React from 'react';
import styled from 'styled-components';
import { useQuery, gql } from '@apollo/client';

const Wrapper = styled.div `
  width: 100%;
  margin: 0 auto;
  min-height: 200px;
  background-color: red;
  border: 2px solid black;
`

const Title = styled.h1 `
  color: yellow;
  font-size: 30px;
  text-align: center;
`

const Test = () => {
  const handleOnClick = (number1:number, number2:number) => {
    console.log(number1 + number2)
  }

  return (
    <div>
      <button onClick={() => handleOnClick(1, 2)}>Click me</button>
    </div>
  )
}


const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  console.log(loading, error, data)

  return (
    <Wrapper>
      <Title>Mój tytuł</Title>
      <Test />
    </Wrapper>
  )
}

export default App;
