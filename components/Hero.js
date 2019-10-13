import React, { Component, Fragment } from 'react';
import Link from 'next/link';

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tab = this.props.heroTab;

    return (
      <Fragment>
        <div className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img src="static/media/logo.svg" />
              <br /> <br />
              <h2 className="emp bvPurp ashare">Activist shareholders</h2>
              <a className="button is-large">Join the Movement</a>
            </div>
          </div>
          <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
              <div className="container">
                <ul>
                  <li className={tab === 'home' ? 'is-active' : null}>
                    <Link href="/" scroll>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className={tab === 'join' ? 'is-active' : null}>
                    <Link href="/join" scroll>
                      <a>Join the Movement</a>
                    </Link>
                  </li>
                  <li className={tab === 'platform' ? 'is-active' : null}>
                    <Link href="/platform">
                      <a>Our Platform</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <style jsx>{`
          .container img {
            width: 310px;
          }

          .emp {
            font-size: 1.5rem !important;
          }

          .ashare {
            padding: 0.5rem;
          }
        `}</style>
      </Fragment>
    );
  }
}
