import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import UsersProvider from './contexts/UsersContext'
import './assets/fonts/NeutraText-Book.otf'
import './assets/fonts/NeutraText-Bold.otf'
import ProductsProvider from './contexts/ProductsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UsersProvider>
            <ProductsProvider>
                <App />
            </ProductsProvider>
        </UsersProvider>
    </React.StrictMode>
)
