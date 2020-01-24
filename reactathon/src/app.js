import React from 'react'
import ReactDOM from 'react-dom'

import { Switch, Route, BrowserRouter } from 'react-router-dom'

import 'bulma'
import './stylesheets/main.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import ExternalLinks from './components/common/ExternalLinks'


import HeroIndex from './components/HeroDirectory/HeroIndex'

import SinglePlayer from './components/HeroBattles/SinglePlayer'

import HeroProfile from './components/DisplayHero/HeroProfile'

const App = () => (
  
  <BrowserRouter>
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/heroes/:id" component={HeroProfile} />
      <Route path="/heroes" component={HeroIndex} />
      <Route path="/battles/single-player" component={SinglePlayer} />
      <Route path="/external-links" component={ExternalLinks} />
    </Switch>
    </>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)