import React, { Component, Fragment } from 'react';
import Link from 'next/link';

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
              <Link href="/doemee">
                <a className="navbar-item">Doe Mee</a>
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link href="/about">
                  <a className="navbar-link">Wat is BV Nederland?</a>
                </Link>
                <div className="navbar-dropdown">
                  <Link href="/manifest">
                    <a className="navbar-item">Het manifest</a>
                  </Link>
                  <Link href="/visie">
                    <a className="navbar-item">Onze visie</a>
                  </Link>
                  <Link href="static/media/bvnederland.pdf">
                    <a className="navbar-item">PDF</a>
                  </Link>
                  {/* <Link href="#">
                    <a className="navbar-item">Waarom de tulp?</a>
                  </Link> */}
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
