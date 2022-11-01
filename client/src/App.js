import React from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import GlobalStyle from "./styles/Global.styled";
import { colorTheme } from "./styles/theme.styled";
import Layout from "./components/Layout/Layout";
import Router from "./Router";

const App = () => {
  return (
    <ThemeProvider theme={colorTheme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
