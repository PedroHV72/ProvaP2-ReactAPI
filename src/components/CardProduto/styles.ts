import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1rem;
    text-align: center;
    justify-content: center;
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #ccc;
    }

    > main {
        width: 100%;
        position: relative;

        > img {
            width: 130px;
            height: 130px;
        }
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