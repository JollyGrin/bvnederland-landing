import React, { Component, Fragment } from 'react';
import Link from 'next/link';

export default class JoinBody extends Component {
  render() {
    return (
      <Fragment>
        <div className="home-body">
          <section className="section">
            <div className="columns has-text-centered">
              <div className="column is-6 is-offset-3">
                <h3 className="title emp">Kom bij de beweging</h3>
                <h4 className="subtitle">
                  Dit is meer dan een politieke partij, het is een visie.
                  <br />
                  Wij gaan dit een beetje anders doen.
                </h4>
              </div>
            </div>
            <br /> <br />
            <div className="columns">
              {/* <div className="column is-3 is-offset-2">
                <h2 className="title">The Next Steps</h2>
                <h3 className="subtitle">
                  Everyone has a role, help mobilize your city.
                </h3>
                <ol>
                  <li>Start a chapter in every city</li>
                  <li>Launch a simultaneous flyer party in every city</li>
                  <li>Get #BVNederland trending on twitter</li>
                  <li>Get 100 videos on instagram with #WijZijnBV</li>
                  <li>More challenges coming...</li>
                </ol>
              </div> */}
              <div className="column is-8 is-offset-2 card">
                <div className="card-content">
                  <h2 className="title">Laten we beginnen.</h2>
                  <h3 className="subtitle">
                    Onze beweging is een doe-mee-cratie. Vraag geen toestemming.
                    Jij bent de beweging. We werken samen aan dezelfde visie.
                  </h3>
                  <p>
                    BV Nederland is een beweging van mensen die voor een nieuwe
                    politiek in Nederland pleiten, met meer democratie, meer op
                    de mens gericht en met een vrijheidsdividend van 1.000 euro
                    per maand. We're seeking We zijn op zoek naar mensen die
                    dezelfde visie voor Nederland hebben en mee willen doen aan
                    deze nationale beweging. Om samen toe te werken naar een
                    overwinning tijdend de Tweede Kamerverkieingen in 2021. Stap
                    voor stap.{' '}
                  </p>
                </div>
                <div className="card-footer-item">
                  <div className="field has-addons">
                    {/* <div className="control is-medium">
                      <input
                        className="input script"
                        type="text"
                        placeholder="Meld je aan"
                      />
                    </div> */}
                    <div className="control">
                      {/* <Link href="http://wijzijnbv.substack.com/welcome">
                        <a className="button is-info is-large">Doe mee</a>
                      </Link> */}
                      <iframe
                        width="480"
                        height="400"
                        src="https://wijzijnbv.substack.com/embed"
                        frameBorder="0"
                        scrolling="no"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </section>
        </div>

        <style jsx>{`
          .home-body {
            background: white;
          }

          .box {
            color: #363636;
          }

          .siggy {
            display: flex;
            align-items: flex-end;
          }

          .fas,
          .far {
            font-size: 3.5rem;
          }
        `}</style>
      </Fragment>
    );
  }
}
