import content from "./Data/TextContent";
import { testimonials } from "./Data/Testimonials";

import { ThemeProvider } from "styled-components";

import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import TestimCard from "./Components/TestimCard.tsx/TestimCard";


import { Flex } from "./Components/Flex/Flex";
import {  StyledCherry } from "./Styled/StyledCherry";
import { StyledOrange } from "./Styled/StyledOrange";
import { Container } from "./Styled/StyledContainer";
import { Grid } from "./Components/Grid/Grid";
import Footer from "./Components/Footer/Footer";




const theme = {
  colors:{
    SoftRed: 'hsl(7, 99%, 70%)',
    Yellow: 'hsl(51, 100%, 49%)',
    DarkCyan : 'hsl(167, 40%, 24%)',
    DarkBlue :'hsl(198, 62%, 26%)',
    DarkModerateCyan: 'hsla(167.75510204081633, 22.58064516129031%, 57.45098039215686%, 0.988)',
  },
  mobile:'768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}> 
    <>
    
    <Header/>
    
      {content.map((item, index) => (
        <Card key={index} item={item}/>
      ))}

      <Flex>
      <StyledCherry>
        <div>
        <h1>Graphic design</h1>
        <p>Great design makes you memorable. We deliver artwork that underscores your brand  message and captures potential client's attention</p>
        </div>
      </StyledCherry>
    
      <StyledOrange>
        <div>
          <h1>
            Photography
          </h1>
          <p>
            Increase your credibility by getting  the most  stunning , high-quality photos that improve your business image.
          </p>
        </div>
      </StyledOrange>
      </Flex>

      <Container>
        <h1>CLIENT TESTIMONIALS</h1>
      <Flex>
        
        {testimonials.map((item) => (
          <TestimCard key={item.id} testimonials={item}/>
        ))}
      </Flex>
      </Container>

      <Grid>
        <img src="/images/mobile/image-gallery-cone.jpg" alt="" />
        <img src="/images/mobile/image-gallery-milkbottles.jpg" alt="" />
        <img src="/images/mobile/image-gallery-orange.jpg" alt="" />
        <img src="/images/mobile/image-gallery-sugar-cubes.jpg" alt="" />
      </Grid>

      <Footer />
    
 
    </>
    </ThemeProvider>
  );
}

export default App;
