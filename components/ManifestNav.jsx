import React, { Component, Fragment } from 'react';
import Link from 'next/link';

export default class ManifestNav extends Component {
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
            <span className="navbar-item">
              {/* <img src="/static/media/tulip-w.svg" width="100" /> */}

              <Link href="/">
                <a className="button is-text">Terug naar Home</a>
              </Link>
            </span>
          </div>
        </nav>
        <style jsx>{`
          .navbar {
            background: transparent;
          }

          a {
            color: white !important;
            opacity: 0.3;
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
