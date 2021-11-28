// import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './Login';

function Header() {

  return (
    <header>
      <main id="main-content">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">

            <a className="navbar-brand" href="/">Radoslav Kamberov</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">

              <ul className="navbar-nav ml-lg-auto">
                <li className="nav-item">
                  <a href="#home" className="nav-link smoothScroll">Home</a>
                </li>

                <li className="nav-item">
                  <a href="#about" className="nav-link smoothScroll">About Me</a>
                </li>

                <li className="nav-item">
                  <a href="#coaching" className="nav-link smoothScroll">Coaching</a>
                </li>

                <li className="nav-item">
                  <a href="#book-a-session" className="nav-link smoothScroll">Book a session</a>
                </li>

                <li className="nav-item">
                  <a href="#contact" className="nav-link smoothScroll">Contacts</a>
                </li>

                <li className="nav-item">
                  <a href="/loginForm" className="nav-link smoothScroll">Log In</a>
                </li>

                <li className="nav-item">
                  <a href="/registerForm" className="nav-link smoothScroll">Register</a>
                </li>

                <li className="nav-item">
                  <a href="/logout" className="nav-link smoothScroll">Logout</a>
                </li>


              </ul>

              <ul className="social-icon ml-lg-3">
                <li>
                  <a href="https://www.facebook.com/kamberov" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="#" className="fa fa-twitter"></a>
                </li>
                <li>
                  <a href="#" className="fa fa-instagram"></a>
                </li>
              </ul>
            </div>

          </div>
        </nav>
      </main>
    </header>
  )
}

export default Header;