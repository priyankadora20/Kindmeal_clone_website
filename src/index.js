import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { store } from './Components/Recipes/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Provider store={store}>
    <ChakraProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ChakraProvider>
    </Provider>
);

