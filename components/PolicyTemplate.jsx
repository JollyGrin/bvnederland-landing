import React from 'react'
import Link from 'next/link'

export default ({ children }) => {
  return (
    <>
      <section className='section'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>
            <div className='content box'>{children}</div>
            <div className='container has-text-centered'>
              <Link href='/visie'>
                <a className='button'>Terug naar Visie</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        //   .box {
        //     padding-top: -150px;
        //   }
      `}
      </style>
    </>
  )
}
