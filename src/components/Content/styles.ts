import styled from "styled-components";

export const Container = styled.div`
    grid-area: CT;
    width: 100%;
    max-width: 1020px;
    margin: 0 auto;

    > h1 {
        padding-top: 10px;
        color: black;
        font-family: 'Ubuntu', sans-serif;
        font-size: 23px;
        font-weight: bold;
        margin-top: 29rem;
    }
`;

export const Linha = styled.div`
    width: 44px;
    height: 4px;
    background-color: ${props => props.theme.colors.secondary};
    margin-top: 15px;
`;

export const Produtos = styled.div`
    margin: 1rem 0 3rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SlideContent = styled.main`
    width: 100%;
    background: red;
    position: absolute;
    left: 0;
`;