import React, { Component, Fragment } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footer">
          <div className="container has-text-centered">
            <img src="static/media/tulip-o.svg" />
          </div>
          <div className="columns">
            <div className="column is-6 is-offset-3">
              <nav className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <a href="https://twitter.com/wijzijnbv">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <p className="help">Twitter</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <a href="https://wijzijnbv.substack.com">
                      <i className="fas fa-envelope-open-text"></i>
                    </a>
                    <p className="help">Newsletter</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <a href="https://bvnederland.slack.com">
                      <i className="fab fa-slack"></i>
                    </a>
                    <p className="help">Chatroom</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <a href="mailto:bvnl@protonmail.com">
                      <i className="fas fa-paper-plane"></i>
                    </a>
                    <p className="help">Contact Us</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="container has-text-centered">
            <p>BV Nederland ©2019</p>
          </div>
        </footer>
        <style jsx>{`
          .footer {
            background-color: #3b323d;
            color: white;
          }

          .fab,
          .fas {
            font-size: 3rem;
          }

          a {
            color: white;
          }
          a :hover {
            color: orange;
          }
        `}</style>
      </Fragment>
    );
  }
}
