import React from 'react';

import logoPrincipal from '../../assets/logoPrincipal.png';
import lupa from '../../assets/lupa.png'
import usuario from '../../assets/usuario.png'
import carrinho from '../../assets/carrinho.png'
import brasil from '../../assets/brasil.png'
import espanha from '../../assets/espanha.png'
import gra from '../../assets/gra.png'

import {  Container, 
          ConteudoHeader, 
          Logo, 
          Busca, 
          TextoBusca, 
          ImagemLupa, 
          Opcoes,
          ConteudoUser,
          MinhaConta,
          Carrinho,
          Bandeiras,
          Linha } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <ConteudoHeader>
                <Logo>
                  <img src={logoPrincipal}></img>
                </Logo>
                <Busca>
                  <TextoBusca>
                    <p>O que você está procurando?</p>
                  </TextoBusca>
                  <ImagemLupa>
                    <img src={lupa}></img>
                  </ImagemLupa>
                </Busca>
                <Opcoes>
                    <ConteudoUser>
                      <img src={usuario}></img>
                    </ConteudoUser>
                    <MinhaConta>
                      <p>Minha conta</p>
                    </MinhaConta>
                    <Carrinho>
                      <img src={carrinho}></img>
                    </Carrinho>
                    <Linha>
                      <hr />
                    </Linha>
                    <Bandeiras>
                      <img src={brasil}></img>
                    </Bandeiras>
                    <Bandeiras>
                      <img src={espanha}></img>
                    </Bandeiras>
                    <Bandeiras>
                      <img src={gra}></img>
                    </Bandeiras>
                  </Opcoes>
            </ConteudoHeader>
        </Container>
    );
}

export default Header;