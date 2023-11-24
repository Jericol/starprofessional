import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import App from './App';




export const  root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
                 <App />        
        </Provider>
    </React.StrictMode>
);


