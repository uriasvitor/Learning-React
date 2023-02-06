import React from 'react'
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import Dashboard from './Pages/Dashboard';
import List from './Pages/List';

const App = () =>{
    return(
        <ThemeProvider theme={dark}>
            <GlobalStyles/>
            <Layout>
                <List></List>
            </Layout>
        </ThemeProvider>
    )
}

export default App