import React, { Component, Fragment } from 'react';
import Link from 'next/link';

export default class PlatformBody extends Component {
  render() {
    return (
      <Fragment>
        <div className="home-body">
          <section className="section">
            <div className="columns has-text-centered">
              <div className="column is-6 is-offset-3">
                <h3 className="title emp">
                  Niet links. Niet rechts. Voorwaarts.
                </h3>
                <h4 className="subtitle">
                  Polarisatie en tribalisme is vermoeiend. Het is tijd voor
                  pragmatische oplossingen om Nederland een gids te maken in de
                  21ste eeuw. Als economie en samenleving.
                </h4>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="columns has-text-centered">
                  <div className="column">
                    <div className="box">
                      <Link href="/visie/dividend">
                        <a>
                          <h1 className="title">Vrijheidsdividend</h1>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="column">
                    <div className="box">
                      <Link href="/visie/democratie">
                        <a>
                          <h1 className="title">Democratie</h1>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="column">
                    <div className="box">
                      <Link href="/visie/kapitalisme">
                        <a>
                          <h1 className="title">Menselijk kapitalisme</h1>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="container has-text-centered">
                  <h2 className="title">Ons Plan</h2>
                  <br />
                </div>
                <div className="columns has-text-centered">
                  <div className="column">
                    <ul className="policies">
                      <li>
                        <Link href="/visie/immigratie">
                          <a>Immigratie</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/visie/onderwijs">
                          <a>Onderwijs</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="policies">
                      <li>
                        <Link href="/visie/cohesie">
                          <a>Sociale Cohesie</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="column">
                    <ul className="policies">
                      <li>
                        <Link href="/visie/zorg">
                          <a>Zorg</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .home-body {
            background: white;
          }

          .box a h1 :hover {
            color: orange;
          }

          .policies li a {
            font-size: 1.5rem;
            color: orange;
          }

          .fas,
          .far {
            font-size: 3.5rem;
            opacity: 0.3;
            padding: 1rem;
          }
        `}</style>
      </Fragment>
    );
  }
}
