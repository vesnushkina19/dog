import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {BrowserRouter, HashRouter} from "react-router-dom";
import { ProductPage } from './Pages/ProductPage/ProductPage';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <App/>
    </HashRouter>
    );

