import React, { Component, Fragment } from 'react'
import Link from 'next/link'

export default class PolicyHero extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { title, subtitle } = this.props
    return (
      <>
        <div className='hero is-medium'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <Link href='/'>
                <a>
                  <img src='/static/media/tulip-w.svg' />
                </a>
              </Link>
              <br /> <br />
              <h1 className='title emp bvPurp ashare'>{title}</h1>
              <h2 className='subtitle'>{subtitle}</h2>
            </div>
          </div>
        </div>
        <style jsx>{`
          .container img {
            height: 150px;
          }

          .hero {
            margin-bottom: -85px;
          }

          .emp {
            font-size: 2rem !important;
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
