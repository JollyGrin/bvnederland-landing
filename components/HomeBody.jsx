import React, { Component } from 'react'
import Link from 'next/link'

export default class HomeBody extends Component {
  render () {
    return (
      <>
        <div className='home-body'>
          <section className='section'>
            <div className='columns has-text-centered'>
              <div className='column is-6 is-offset-3'>
                <h3 className='title emp'>
                  Wij, de aandeelhouders van Nederland,
                  <br /> claimen een dividend.
                </h3>
                <h4 className='subtitle'>
                  BV Nederland is een beweging die elke burger een <br />
                  vrijheidsdividend van 1.000 euro per maand wilt geven.
                </h4>
              </div>
            </div>
            <br />
            <br />

            <div className='columns'>
              <div className='column is-8 is-offset-2'>
                <div className='columns bigThree has-text-centered'>
                  <div className='column'>
                    <i className='fas fa-euro-sign' />
                    <Link href='/visie/main_vrijheidsdividend'>
                      <h2 className='titleLink'>
                        Vrijheidsdividend
                      </h2>
                    </Link>
                    <p>
                      1.000 euro per maand voor elke Nederlander boven de 18.
                    </p>
                  </div>
                  <div className='column'>
                    <i className='far fa-chart-bar' />
                    <Link href='/visie/main_menselijk_kapitalisme'>
                      <h2 className='titleLink'>
                        Nieuw voorwaarts bbp
                      </h2>
                    </Link>
                    <p>
                      Een bbp waarin ook de mens en de gezondheid van onze
                      samenleving wordt meegenomen.
                    </p>
                  </div>
                  <div className='column'>
                    <i className='fas fa-fist-raised' />
                    <Link href='/visie/main_democratie'>
                      <h2 className='titleLink'>
                        Democratie-aandelen
                      </h2>
                    </Link>
                    <p>
                      Als aandeelhouders van onze democratie krijgt iedere
                      Nederlander een aandeel van 25 euro die hij of zij aan een
                      politieke partij of Kamerlid kan geven
                    </p>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </section>
          {/* <section className="section"> */}
          <div className='columns has-text-centered is-vcentered'>
            <div className='column box1'>
              <Link href='/manifest'>
                <a>
                  <h1 className='title emp emp1'>Het Manifest</h1>
                </a>
              </Link>
            </div>
            <div className='column box2'>
              <Link href='/doemee'>
                <a>
                  <h1 className='title emp emp1'>Doe Mee</h1>
                </a>
              </Link>
            </div>
            <div className='column box3'>
              <Link href='/visie'>
                <a>
                  <h1 className='title emp emp1'>Onze Visie</h1>
                </a>
              </Link>
            </div>
            <div className='column box4'>
              <Link href='/about'>
                <a>
                  <h1 className='title emp emp1'>Over Ons</h1>
                </a>
              </Link>
            </div>
          </div>
          {/* </section> */}
        </div>

        <style jsx>{`
          .home-body {
            background: white;
          }

          .emp1 {
            color: white !important;
          }
          .emp1:hover {
            color: orange !important;
          }

          .button {
            margin-right: 20px;
            margin-top: 20px;
          }

          .box1 {
            background-image: url(/static/media/rally1.png);
          }

          .box2 {
            background-image: url(/static/media/rally2.png);
          }

          .box3 {
            background-image: url(/static/media/rally5.png);
          }
          .box4 {
            background-image: url(/static/media/rally4.png);
          }

          .box1,
          .box2,
          .box3,
          .box4 {
            min-height: 250px;
            background-position: center;
            background-size: cover;
            background-color: rgba(200, 100, 0, 0.5); // Tint color
            background-blend-mode: multiply;
            display: flex;
            justify-content: center; /* align horizontal */
            align-items: center; /* align vertical */
            color: white;
          }

          .fas,
          .far {
            font-size: 3.5rem;
            opacity: 0.3;
            padding: 1rem;
          }

          .titleLink {
              color: orange;
              font-size: 2rem;
              font-weight: 600;
              line-height: 1.125;
              cursor:pointer;
          }
          .titleLink:hover {
              color: #dd8300;
          }
        `}
        </style>
      </>
    )
  }
}
