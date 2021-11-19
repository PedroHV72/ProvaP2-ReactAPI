import styled from "styled-components";

export const GridLayout = styled.div`
    display: grid;
    grid-template-rows: 100px auto 100px;
    grid-template-areas: 
    'HD HD'
    'CT CT'
    'FT FT';
    height: 100vh;
`;