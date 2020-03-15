import React, { Component, Fragment } from 'react'
import Link from 'next/link'

export default class Hero extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const tab = this.props.heroTab

    return (
      <>
        <div className='hero is-medium'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <Link href='/manifest'>
                <a>
                  <img src='/static/media/logo.svg' />
                </a>
              </Link>
              <br /> <br />
              <h2 className='emp bvPurp ashare'>Beweeg jij mee voorwaarts?</h2>
              <Link href='/doemee'>
                <a
                  className={`button is-primary is-large ${
                    tab === 'join' ? 'hide' : null
                  }`}
                >
                  Doe mee
                </a>
              </Link>
            </div>
          </div>
          <div className='hero-foot'>
            <nav className='tabs is-boxed is-fullwidth'>
              <div className='container'>
                <ul>
                  <li className={tab === 'home' ? 'is-active' : null}>
                    <Link href='/' scroll>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className={tab === 'join' ? 'is-active' : null}>
                    <Link href='/doemee' scroll>
                      <a>Doe Mee</a>
                    </Link>
                  </li>
                  {/* <li className={tab === 'visie' ? 'is-active' : null}>
                    <Link href='/visie'>
                      <a>Onze visie</a>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <style jsx>{`
          ul a {
            font-family: 'Montserrat', sans-serif;
            font-weight: 900;
            font-size: 1.5em;
          }
          
          .container img {
            width: 310px;
          }

          .hide {
            display: none;
          }

          .emp {
            font-size: 1.5rem !important;
          }

          .ashare {
            padding: 0.5rem;
          }
        `}
        </style>
      </>
    )
  }
}
