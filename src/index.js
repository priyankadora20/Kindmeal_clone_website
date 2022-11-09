import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {ChakraProvider} from "@chakra-ui/react"
import { Provider } from 'react-redux';
import { store } from './Components/Meals_Deals/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ChakraProvider>
   <Provider store={store}>

    <BrowserRouter>
    <App />
    </BrowserRouter>
   </Provider>
    //  </ChakraProvider>
);

