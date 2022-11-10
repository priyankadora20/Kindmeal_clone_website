import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
// import {ChakraProvider} from "@chakra-ui/react"
import { Provider } from 'react-redux';
import { store } from './Components/Meals_Deals/store';
import { ChakraProvider,extendTheme } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: ""
        }
      })
    }
  });
  
root.render(
   
    <ChakraProvider theme={theme} resetCSS={false}  >
   <Provider store={store}>


    <BrowserRouter>
    <App />
    </BrowserRouter>
   </Provider>
 </ChakraProvider>
);

