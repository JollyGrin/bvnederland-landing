import React, { Component, Fragment } from 'react'
import { getTwitterFollowers } from '../lib/db'
import DiscussionBox from './discourse_discussion'

export default class JoinBody extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: ''
    }
  }

  componentDidMount () {
    getTwitterFollowers().then(obj => {
      this.setState({ count: obj })
    })
  }

  render () {
    return (
      <Fragment>
        <div className='home-body'>
          <section className='section'>
            <div className='columns has-text-centered'>
              <div className='column is-6 is-offset-3'>
                <h3 className='title emp'>Kom bij de beweging</h3>
                <h4 className='subtitle'>
                  Dit is meer dan een politieke partij, het is een visie.
                  <br />
                  Wij gaan dit een beetje anders doen.
                </h4>
              </div>
            </div>
           
             
            <DiscussionBox />
            <div className='columns has-text-centered'>
              <div className='column is-6 is-offset-3'>
                <a
                  href='https://forum.bvnederland.nu'
                  className='button is-primary is-large'
                >
                  Praat Mee
                </a>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          .home-body {
            background: white;
          }

          .marginfix {
            margin-right: 10px;
          }

          .currentGoal {
            background-color: orange;
          }

          .otext {
            color: orange;
          }

          .siggy {
            display: flex;
            align-items: flex-end;
          }

          .goalBox .column .box {
            min-height: 220px;
          }

          // .fab,
          // .fas,
          // .far {
          //   font-size: 3.5rem;
          // }
        `}
        </style>
      </Fragment>
    )
  }
}
