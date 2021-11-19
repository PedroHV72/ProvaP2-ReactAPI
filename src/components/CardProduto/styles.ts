import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    margin: 0 15vw;

    > h1 {
        padding-top: 10px;
        color: black;
        font-family: 'Ubuntu', sans-serif;
        font-size: 23px;
        font-weight: bold;
    }
`;

export const Linha = styled.div`
    width: 44px;
    height: 4px;
    background-color: ${props => props.theme.colors.secondary};
    margin-top: 15px;
`;

export const Produtos = styled.div`
    margin: 1vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    > img {
        width: 10vw;
    }

    > h2 {
        margin: 0;
        color: ${props => props.theme.colors.black};
        margin: .2vw;
        font-size: larger;
    }

    > h5 {
        margin: 0;
        color: ${props => props.theme.colors.gray};
    }

    > h4 {
        margin: .2vw;
        font-size: x-large;
        color: ${props => props.theme.colors.primary};
        font-weight: bold;
    }
`;

export const OpcaoComprar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.theme.colors.primary};
    border-radius: .5vw;
    padding: 0.4vw 2vw;
    margin: 1vw;

    > img {
        width: 2vw;
        margin: 0 1.5vw 0 0;
    }

    > h3 {
        margin: 0;
        color: ${props => props.theme.colors.white};
        font-weight: 600;
    }
`;