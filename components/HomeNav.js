import React, { Component, Fragment } from 'react';

export default class HomeNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDisplay: false
    };
  }

  navToggle = () => {
    const currentState = this.state.navDisplay;
    this.setState({ navDisplay: !currentState });
  };
  render() {
    return (
      <Fragment>
        <nav
          className="navbar is-active"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={this.navToggle}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            id="navbarBasicExample"
            className={`navbar-menu ${
              this.state.navDisplay ? 'is-active' : null
            }`}
          >
            <div className="navbar-end">
              <a className="navbar-item">Join Us!</a>
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">What's BV Nederland?</a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">The Manifest</a>
                  <a className="navbar-item">Policies</a>
                  <a className="navbar-item">About Us</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <style jsx>{`
          .navbar {
            background: transparent;
          }

          .bv-logo-text {
            font-size: 2rem;
            font-weight: bold;
          }

          .navbar-item img {
            max-height: 2.5rem !important;
          }
        `}</style>
      </Fragment>
    );
  }
}
