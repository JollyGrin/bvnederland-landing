import React, { Component, Fragment } from 'react';

export default class PlatformBody extends Component {
  render() {
    return (
      <Fragment>
        <div className="home-body">
          <section className="section">
            <div className="columns has-text-centered">
              <div className="column is-6 is-offset-3">
                <h3 className="title emp">Not Left, Not Right. Forward</h3>
                <h4 className="subtitle">
                  Tribalism is exhausting. Time for some pragmatic solutions to
                  prepare our country to lead the 21st century.
                </h4>
                <br /> <br />
                <p>Coming Soon...</p>
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
