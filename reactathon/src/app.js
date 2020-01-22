import React from 'react'
import ReactDOM from 'react-dom'

import { Link, Switch, Route, BrowserRouter } from 'react-router-dom'

import './stylesheets/main.scss'
import 'bulma'

import Home from './components/Home'
import HeroIndex from './components/HeroDirectory/HeroIndex'

import SinglePlayer from './components/HeroBattles/SinglePlayer'

import HeroProfile from './components/DisplayHero/HeroProfile'

const App = () => (
  
  <BrowserRouter>
    <>
    <nav className="navbar is-success">
      <Link className="navbar-item" to="/">Home</Link>
      <Link className="navbar-item" to="/heroes">Heroes</Link>
      <Link className="navbar-item" to="/battles/single-player">1 v 1</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/heroes/:id" component={HeroProfile} />
      <Route path="/heroes" component={HeroIndex} />
      <Route path="/battles/single-player" component={SinglePlayer} />
    </Switch>
    </>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)