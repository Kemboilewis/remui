import { Button, Container, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import theme from "./styles/theme";




function App() {
  useEffect(()=>{
    document.title="react material ui tutorial"
  },[]);
  return (
    <ThemeProvider theme={theme}>
      <Container
      maxWidth="xl"
      sx={{
        background:"#ffffff",
      }}
      >
        <Appbar/>
        <Banner/>
        <Promotions/>
        {
          /*
          title
          products
          footer
          searchbox
          appdrawer
          */
        }
        
          
      
      </Container>

    </ThemeProvider>
  );
}

export default App;
