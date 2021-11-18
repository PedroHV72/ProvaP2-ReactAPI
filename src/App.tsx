import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import cores from './styles/themes/cores';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={cores}>
            <GlobalStyles />
            <Layout />
        </ ThemeProvider>
    );
}

export default App;