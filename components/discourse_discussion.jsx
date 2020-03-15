import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export default class DiscussionBox extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    /**
     * if we add this script as an ordinary script tag in render(),
     * the script loads, but react removes all DOM after it is added,
     * I am not a react expert, but this seems to work.
     */
    const script = document.createElement('script')

    document.body.appendChild(script)
    script.onload = function () {
      var DOMContentLoaded_event = document.createEvent('Event')
      DOMContentLoaded_event.initEvent('DOMContentLoaded', true, true)
      window.document.dispatchEvent(DOMContentLoaded_event)
    }
    script.src = 'https://forum.bvnederland.nu/javascripts/embed-topics.js'
  }

  render () {
    return (
      <Fragment>
        <div className='discussion-box-container'>
          <div className='discussion-box'>
            <d-topics-list discourse-url='https://forum.bvnederland.nu' per-page='5' />
          </div>
        </div>

        <style jsx>{`
                .discussion-box-container {
                  display:flex;
                }

                .discussion-box {
                  display: flex;
                  margin-left: auto;
                  margin-right: auto;
                }
          `}
        </style>
      </Fragment>
    )
  }
}
