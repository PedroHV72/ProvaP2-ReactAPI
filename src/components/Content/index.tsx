import React, { useEffect, useState } from 'react';

import Slide from '../Slide';
import CardProduto from '../CardProduto';

import { Container, Linha, Produtos, SlideContent } from './styles';
import api from '../../services/api';

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

const Content: React.FC = () => {
  const [data, setData] = useState<ICardProdutoProps[]>();

    useEffect(() => {
        async function loadData() {
            try {
                const response = await api.get('/produto/')
                setData(response.data)
                console.log(response.data)
            }
            catch(error) {
                console.log(error)
            }
        };
        loadData();
    }, [])

  return (
    <Container>
      <SlideContent>
      <Slide />
      </SlideContent>
      <h1>Produtos</h1>
      <Linha />
      <Produtos>
        {data?.slice(0, 4).map((produto, index) => (
            <CardProduto 
                key={index}
                name={produto.name}
                image={produto.image}
                oldPrice={produto.oldPrice}
                price={produto.price}
                parcela={produto.parcela}
            />
        ))}
      </Produtos>
    </Container>
  );
}

export default Content;