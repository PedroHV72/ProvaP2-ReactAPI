import React from 'react';

import LogoPrincipal from '../../assets/logoPrincipal.png'
import CarrinhoCompra from '../../assets/carrinhoCompra.png'

import { Container, Linha, Produtos, OpcaoComprar } from './styles';

const CardProduto: React.FC = () => {
  return (
      <Container>
          <h1>Produtos</h1>
          <Linha />
          <Produtos>
            <img src={LogoPrincipal}></img>
            <h2>Nome produto</h2>
            <h5>De 299</h5>
            <h4>Por 209</h4>
            <h5>ou em 10x de 20,90</h5>
            <OpcaoComprar>
                <img src={CarrinhoCompra}></img>
                <h3>Comprar</h3>
            </OpcaoComprar>
          </Produtos>
      </Container>
  );
}

export default CardProduto;