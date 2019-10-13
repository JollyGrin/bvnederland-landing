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
                  We, the citizen shareholders, declare a dividend.
                </h3>
                <h4 className="subtitle">
                  BV Nederland is a movement to declare each citizen a universal
                  basic income of €1000/mo
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
                    <h2 className="title">Freedom Dividend</h2>
                    <p>
                      €1000/mo for every citizen of the Netherlands after the
                      age 18.
                    </p>
                  </div>
                  <div className="column">
                    <i className="far fa-chart-bar"></i>
                    <h2 className="title">A New Scorecard</h2>
                    <p>
                      GDP shouldn't be our northstar, we need a new scorecard to
                      maintain a future course.
                    </p>
                  </div>
                  <div className="column">
                    <i className="fas fa-fist-raised"></i>
                    <h2 className="title">Democracy Dollars</h2>
                    <p>
                      We're going to establish a foundation for grassroots
                      democracy so that our politics follows the pulse of the
                      people.
                    </p>
                  </div>
                </div>
                <div className="container has-text-centered">
                  <Link href="/platform">
                    <a className="button is-large">Explore our Platform</a>
                  </Link>
                  {/* <p>
                    This is just the beginning of a new paradigm of politics
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
