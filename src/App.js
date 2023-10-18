import React from 'react'

import Home from './views/home/Home'


function App() {
  const isProduction = process.env.NODE_ENV === 'production';
  return (
    <Home />
  )
}

export default App