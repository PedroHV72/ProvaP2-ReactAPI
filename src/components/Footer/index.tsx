import React from 'react';

import fale from '../../assets/fale.png'
import contato from '../../assets/contato.png'
import logoFooter from '../../assets/logoFooter.png'

import { Container, Localizacao, Risco, DivCidades, Cidades, Contato, BotaoContato, LogoFooter } from './styles';

const Footer: React.FC = () => {
  return (
      <Container>
          <Localizacao>
            <h1>Localização</h1>
            <Risco />
            <DivCidades>
                <Cidades>
                    <h2>São Paulo</h2>
                    <p>Rua do Rócio, 423/1801</p>
                    <p>Vila Olímpia - SP</p>
                    <p>04552-000</p>
                    <p>+55 11  3333 3333</p>
                </Cidades>
                <Cidades>
                    <h2>Rio de Janeiro</h2>
                    <p>Vol. da Pátria, 301/702</p>
                    <p>Botafogo - RJ</p>
                    <p>22270-000</p>
                    <p>+55 21 3333 3333</p>
                </Cidades>
            </DivCidades>
          </Localizacao>
          <Contato>
                <BotaoContato>
                    <img src={contato}></img>
                </BotaoContato>
                <BotaoContato>
                    <img src={fale}></img>
                </BotaoContato>
          </Contato>
          <LogoFooter>
            <img src={logoFooter}></img>
          </LogoFooter>
      </Container>
  );
}

export default Footer;