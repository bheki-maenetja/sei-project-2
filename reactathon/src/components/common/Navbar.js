import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

   state= { isNavbarOpen: false }

   toggleNavbar = () => {
     this.setState({ isNavbarOpen: !this.state.isNavbarOpen })
   }

   render() {
     return (
       <>
       <nav className="navbar is-dark">
         <div className="container">
           <div className="navbar-brand">
             <Link className="navbar-item hero-logo" to="/"></Link>
             <a className={`navbar-burger ${this.state.isNavbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
               <span></span>
               <span></span>
               <span></span>
             </a>
           </div>
           <div className={`navbar-menu ${this.state.isNavbarOpen ? 'is-active' : ''}`}>
             <div className="navbar-end">
               <Link className="navbar-item" to="/heroes">Heroes</Link>
               <Link className="navbar-item" to="/battles/single-player">Hero Battle</Link>
               <Link className="navbar-item" to="/external-links">External Links</Link>
             </div>
           </div>
         </div>
       </nav>
       </>
     )
   }
}

export default Navbar