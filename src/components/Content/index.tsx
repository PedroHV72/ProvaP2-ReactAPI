import React from 'react';

import Slide from '../Slide';
import CardProduto from '../CardProduto';

import { Container } from './styles';

const Content: React.FC = () => {
  return (
      <Container>
        <Slide />
        <CardProduto />
      </Container>
  );
}

export default Content;