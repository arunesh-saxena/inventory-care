import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '@/app/store';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import App from './App';

// const theme = createTheme({
//   // Define your custom theme here
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <FluentProvider theme={webLightTheme}>
          <App />
        </FluentProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
