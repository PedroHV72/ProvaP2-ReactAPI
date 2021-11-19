import React from 'react';

import CarrinhoCompra from '../../assets/carrinhoCompra.png'

import { Container, OpcaoComprar } from './styles';

interface ICardProdutoProps {
  name: string;
  image: string;
  oldPrice: number;
  price: number;
  parcela: {
    count: number;
    value: number;
  }
}

const CardProduto: React.FC<ICardProdutoProps> = ({name, image, oldPrice, price, parcela}) => {
  return (
      <Container>
        <main>
          <img src={image}></img>
        </main>
        <h2>{name}</h2>
        <h5>De {oldPrice}</h5>
        <h4>Por {price}</h4>
        <h5>ou em {parcela.count}x de {parcela.value}</h5>
        <OpcaoComprar>
          <img src={CarrinhoCompra}></img>
          <h3>Comprar</h3>
        </OpcaoComprar>
      </Container>
  );
}

export default CardProduto;