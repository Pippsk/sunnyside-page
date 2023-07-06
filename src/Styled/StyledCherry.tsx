import styled from 'styled-components'



export const StyledCherry = styled.div`
     background-image: url("images/desktop/image-graphic-design.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    height: 700px;
      width:50% ;

     div{
          padding:0 50px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: end;
          height: 100%;
          
     h1{
          
          font-family: 'Fraunces', serif;
     }

     p{
          line-height: 1.5;
          font-family: 'Fraunces', serif;
          margin: 50px 0;
     }
      }
    @media(max-width:${({theme}) => theme.mobile}){
         width:100% ;
         background-image: url("images/desktop/image-graphic-design.jpg");
    }
`