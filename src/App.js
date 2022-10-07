import { Button, Container, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import Appbar from "./components/appbar";
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
        {
          /*
         
          banner
          promotions
          title
          products
          footer
          searchbox
          appdrawer
          */
        }
        
          <Button variant="contained" >Testing button</Button>
      
      </Container>

    </ThemeProvider>
  );
}

export default App;
