import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider ,extendTheme} from '@chakra-ui/react';
import { store } from './Components/Meals_Deals/store';
import { Provider } from 'react-redux';

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
  <ChakraProvider theme={theme} resetCSS={false} >
    <Provider store={store}>

 <BrowserRouter>
    <App />
 </BrowserRouter>
    </Provider>
  </ChakraProvider>
);

