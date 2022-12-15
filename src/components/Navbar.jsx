import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand ms-4" ><i className="fa fa-mobile text-warning me-1" />
            Contact <span className="text-warning">Manager</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={'/contact/add'} className="nav-link">Add Contacts</Link>
              </li>
              <li className="nav-item">
              <Link to={'/contact/add'} className="nav-link">Features</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar