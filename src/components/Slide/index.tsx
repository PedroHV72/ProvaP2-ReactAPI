import React from 'react';
import imagem_slide from '../../assets/imagem_slide.png';

import { Container, ConteudoSlide, ImagemSlide, CorDiv, TextoDiv } from './styles';

const Slide: React.FC = () => {
  return (
      <Container>
        <ConteudoSlide>
            <CorDiv />
            <TextoDiv>
                <h1>Nossa especialidade: Experiência em compra.</h1>
            </TextoDiv>
        </ConteudoSlide>
        <ImagemSlide>
            <img src={imagem_slide}></img>
        </ImagemSlide>
      </Container>
  );
}

export default Slide;