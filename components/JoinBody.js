import React, { Component, Fragment } from 'react';

export default class JoinBody extends Component {
  render() {
    return (
      <Fragment>
        <div className="home-body">
          <section className="section">
            <div className="columns has-text-centered">
              <div className="column is-6 is-offset-3">
                <h3 className="title emp">Join the Movement</h3>
                <h4 className="subtitle">
                  This is more than a political party, it's a movement.
                  <br />
                  We're going to do this a bit differently.
                </h4>
              </div>
            </div>
            <br /> <br />
            <div className="columns">
              <div className="column is-3 is-offset-2">
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
              </div>
              <div className="column is-6 card">
                <div className="card-content">
                  <h2 className="title">Let's get started</h2>
                  <h3 className="subtitle">
                    This is a do-ocracy. No need to ask permission. We lay out
                    the goals and you organize however you want.
                  </h3>
                  <p>
                    BV Nederland is organized as a movement of individuals
                    advocating for €1000/mo in their city. We're seeking
                    like-minded individuals across the Netherlands to join our
                    mission to secure a seat in the chamber by 2021.{' '}
                  </p>
                </div>
                <div className="card-footer-item">
                  <div className="field has-addons">
                    <div className="control is-medium">
                      <input
                        className="input script"
                        type="text"
                        placeholder="Sign your Name"
                      />
                    </div>
                    <div className="control">
                      <a className="button is-info">Join the Movement</a>
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
