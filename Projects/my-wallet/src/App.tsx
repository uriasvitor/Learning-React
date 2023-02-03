import React from 'react'
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import light from './styles/themes/light'
import dark from './styles/themes/dark'


const App = () =>{
    return(
        <ThemeProvider theme={dark}>
            <GlobalStyles/>
            <Layout/>
        </ThemeProvider>
    )
}

export default App