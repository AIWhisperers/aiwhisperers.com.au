import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Footer from '../../container/footer/Footer'
import Header from '../../container/header/Header'
import About from '../about/About'
import Apps from '../apps/Apps'
import Clients from '../clients/Clients'
import Contact from '../contact/Contact'
import Devs from '../devs/Devs'
import HomeHero from './HomeHero'
import Investors from '../investors/Investors'


function Home() {
  const basename = process.env.NODE_ENV === 'development'? "" : "aiwhisperers.com.au"
  return (
    <div className="aiwhisperers">
      <div className="page">
        <Header />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" index element={<HomeHero />} />
            <Route path="/about" index element={<About />} />
            <Route path="/apps" index element={<Apps />} />
            <Route path="/clients" index element={<Clients />} />
            <Route path="/devs" index element={<Devs />} />
            <Route path="/home" index element={<HomeHero />} />
            <Route path="/investors" index element={<Investors />} />
            <Route path="/*" element={<HomeHero />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  )
}

export default Home
