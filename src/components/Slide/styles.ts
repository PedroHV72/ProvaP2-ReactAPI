import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 45vh;
`;

export const ConteudoSlide = styled.div`
    background: #011627;
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 50%;
    justify-content: flex-end;
    font-size: 13px;
    font-family: system-ui;
    align-items: center;
`;

export const ImagemSlide = styled.div`
    background-color:#2EC4B6;
    background-repeat: round;
    display: flex;
    flex-direction: row;
    width: 50%;

    > img {
        width: 100%;
        object-fit: cover;
        object-position: 0 0;
    }
`;

export const CorDiv = styled.div`
    background-color: ${props => props.theme.colors.primary};
`;

export const TextoDiv = styled.div`
    color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 50%;
    justify-content: center;
    align-content: center;
    
    > h1 {
        font-size: 35px;
    }
`;