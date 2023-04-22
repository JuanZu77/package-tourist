import Banner from "./components/banner/Banner";
import Explanation from "./components/explanation/Explanation";
import Presentation from "./components/presentation/Presentation";
import StickyFooter from "./components/stickyFooter/StickyFooter";
import Layout from "./components/layout/Layout";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";

function App() {

  //BreakPoints
  const theme = createMuiTheme({
        values:{
          breakpoints: {
            values: {
              xxs: 320,
              xs: 480,
              sm: 640,
              md: 768,
              lg: 1024,
              xl: 1220,
              xxl:1366,
              xxxl:1620,
            },
          },
        }
  })
  return (
     <ThemeProvider theme={theme}>
        <Layout>

          <Banner/>

          <Explanation/>

          <Presentation/>

          <StickyFooter/>

        </Layout>

      </ThemeProvider>
  )
}

export default App;
