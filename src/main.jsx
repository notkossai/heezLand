import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './styles/globals.css'

import { CoinProvider } from '../contexts/coins/CoinContext.jsx'
import { Game1Provider } from '../contexts/games/Game1Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CoinProvider>
      <Game1Provider>
        <App />
      </Game1Provider>
    </CoinProvider>
  </React.StrictMode>,
)
