import React from 'react';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import cores from './styles/themes/cores';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={cores}>
            <GlobalStyles />
            <Home />
        </ ThemeProvider>
    );
}

export default App;