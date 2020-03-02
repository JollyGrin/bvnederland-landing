import React, { Component } from 'react'
import Link from 'next/link'

export default class Footer extends Component {
  render () {
    return (
      <>
        <footer className='footer'>
          <div className='container has-text-centered'>
            <img src='/static/media/tulip-o.svg' />
          </div>
          <div className='columns'>
            <div className='column is-6 is-offset-3'>
              <nav className='level'>
                <div className='level-item has-text-centered'>
                  <div>
                    <a href='https://twitter.com/wijzijnbv'>
                      <i className='fab fa-twitter' />
                    </a>
                    <p className='help'>Twitter</p>
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <a href='https://wijzijnbv.substack.com'>
                      <i className='fas fa-envelope-open-text' />
                    </a>
                    <p className='help'>Newsletter</p>
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <a href='https://chat.whatsapp.com/E5ZxN6H5LCTIx6tt7Zl7NW'>
                      <i className='fab fa-whatsapp' />
                    </a>
                    <p className='help'>Chatroom</p>
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <a href='https://forum.bvnederland.nu'>
                      <i className='fab fa-discourse' />
                    </a>
                    <p className='help'>Forum</p>
                  </div>
                </div>
                <div className='level-item has-text-centered'>
                  <div>
                    <a href='mailto:bvnederland@outlook.com'>
                      <i className='fas fa-paper-plane' />
                    </a>
                    <p className='help'>Contact Us</p>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className='container has-text-centered'>
            <Link href='/manifest'>
              <a>BV Nederland ©2019</a>
            </Link>
            <br />
            <span>(06) 53 87 05 80</span>
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
        `}
        </style>
      </>
    )
  }
}
