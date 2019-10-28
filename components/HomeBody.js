import React, { Component, Fragment } from 'react';
import Link from 'next/link';

export default class HomeBody extends Component {
  render() {
    return (
      <Fragment>
        <div className="home-body">
          <section className="section">
            <div className="columns has-text-centered">
              <div className="column is-6 is-offset-3">
                <h3 className="title emp">
                  Wij, de aandeelhouders van Nederland,
                  <br /> claimen een dividend.
                </h3>
                <h4 className="subtitle">
                  BV Nederland is een beweging die elke burger een <br />
                  vrijheidsdividend van 1.000 euro per maand wilt geven.
                </h4>
              </div>
            </div>
            <br />
            <br />

            <div className="columns">
              <div className="column is-8 is-offset-2">
                <div className="columns bigThree has-text-centered">
                  <div className="column">
                    <i className="fas fa-euro-sign"></i>
                    <h2 className="title">Vrijheidsdividend</h2>
                    <p>
                      1.000 euro per maand voor elke Nederlander boven de 18.
                    </p>
                  </div>
                  <div className="column">
                    <i className="far fa-chart-bar"></i>
                    <h2 className="title">Nieuw voorwaarts bbp</h2>
                    <p>
                      Een bbp waarin ook de mens en de gezondheid van onze
                      samenleving wordt meegenomen.
                    </p>
                  </div>
                  <div className="column">
                    <i className="fas fa-fist-raised"></i>
                    <h2 className="title">Democratie-aandelen</h2>
                    <p>
                      Als aandeelhouders van onze democratie krijgt iedere
                      Nederlander een aandeel van 25 euro die hij of zij aan een
                      politieke partij of Kamerlid kan geven
                    </p>
                  </div>
                </div>
                <br />
                <div className="container has-text-centered">
                  <Link href="/manifest">
                    <a className="button is-primary is-large manifestButton">
                      Ontdek het Manifest
                    </a>
                  </Link>
                  <Link href="/join">
                    <a className="button is-primary is-large manifestButton">
                      Doe Mee
                    </a>
                  </Link>
                  <Link href="/visie">
                    <a className="button is-primary is-large manifestButton">
                      Ontdek onze Visie
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className="button is-primary is-large">Over Ons</a>
                  </Link>
                  {/* <p>
                    Dit is het begin van een nieuwe politiek, gericht op oplossingen voor de 21-eeuwse economie en samenleving. 
                  </p> */}
                </div>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .home-body {
            background: white;
          }

          .button {
            margin-right: 20px;
            margin-top: 20px;
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
