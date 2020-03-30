import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import 'whatwg-fetch'

import App from './App'

const StyledGlobalStyles = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }  
`

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledGlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
