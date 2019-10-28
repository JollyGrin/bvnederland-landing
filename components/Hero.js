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
              <Link href="/manifest">
                <a>
                  <img src="/static/media/logo.svg" />
                </a>
              </Link>
              <br /> <br />
              <h2 className="emp bvPurp ashare">Beweeg jij mee voorwaarts?</h2>
              <Link href="/join">
                <a className="button is-primary is-large">Doe mee</a>
              </Link>
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
                      <a>Word ook een aandeelhouder</a>
                    </Link>
                  </li>
                  <li className={tab === 'visie' ? 'is-active' : null}>
                    <Link href="/visie">
                      <a>Onze visie</a>
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
