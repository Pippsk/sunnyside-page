import { createGlobalStyle } from "styled-components";


// font-family: 'Barlow', sans-serif;

// font-family: 'Fraunces', serif;

const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:wght@700;900&display=swap');

    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    body{
        margin: 0;
        padding: 0;
        font-family: 'Barlow', sans-serif;
    }

    
    
`

export default GlobalStyle