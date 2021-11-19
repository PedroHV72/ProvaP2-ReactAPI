import styled from "styled-components";

export const Container = styled.div`
    grid-area: FT;
    background-color: ${props => props.theme.colors.primary};
    height: 30vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const Localizacao = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    padding-top: 20px;

    > h1 {
        padding-top: 10px;
        color: white;
        font-family: 'Ubuntu', sans-serif;
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 20px;
    }
`;

export const Risco = styled.div`
    width: 44px;
    height: 4px;
    background-color: ${props => props.theme.colors.secondary};
`;

export const DivCidades = styled.div`
    display: flex;
    justify-content: space-around;
    height: 1vw;
    gap: 20px;
`;

export const Cidades = styled.div`
    width: 7vw;
    color: white;
    font-family: 'Ubuntu', sans-serif;
    font-size: 17px;
    padding-top: 20px;

    > h2 {
        font-weight: bold;
        font-size: 18px;
    }
`;

export const BotaoContato = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;

    > img {
        width: 15vw;
        padding-top: 10px;
    }
`;

export const Contato = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 60px;
`;

export const LogoFooter = styled.div`
    display: flex;
    align-items: flex-end;
    height: 25vh;

    > img {
        width: 10vw;
    }
`;