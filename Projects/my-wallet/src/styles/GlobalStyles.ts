import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
        
    }

    body{
        background-color: black;
    }

    h1,h2,h3, p, span{
        color: white
    }
    
    html,body, #root{
        height:100%
    }

    *, button, input,h1{
        border: 0 ;
        outline: 0;
        font-family:'Hind Siliguri';
    }

    button {
        cursor:pointer;
    }

`;