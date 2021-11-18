import styled from "styled-components";

export const Container = styled.div`
    grid-area: HD;
    background-color: ${props => props.theme.colors.white};
`;

export const ConteudoHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 10vh;
    justify-content: space-around;
`;

export const Logo = styled.div`
    display: flex;
    height: 3vw;

    > img {
        margin-left: 17vw;
    }
`;

export const Busca = styled.div`
    border-bottom: thin;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-style: none none solid none;
    border-color: dimgrey;
`;

export const TextoBusca = styled.div`
    width: 22vw;
    font-size: 14px;
    color: dimgray;
`;

export const ImagemLupa = styled.div`
    > img{
        height: 20px;
    }
`;

export const Opcoes = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding-right: 15vw;
`;

export const ConteudoUser = styled.div`
    display: flex;
    align-items: flex-end;
    width: 2.5vw;
    justify-content: flex-start;
`;

export const MinhaConta = styled.div`
    margin-right: 4vw;

    > p {
        font-size: 15px;
    }
`;

export const Carrinho = styled.div`

    > img {
        height: 20px;
    }
`;

export const Bandeiras = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    height: 10px;
    padding: 2px;

    > img {
        height: 20px;
    }
`;

export const Linha = styled.div`
    > hr {
        width: 0.04vw;
        height: 4vh;
        background-color: black;
        margin: 1vw;
    }
`;