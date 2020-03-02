import React, { Component } from 'react'
import TheHead from '../components/TheHead'
import HomeNav from '../components/HomeNav'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Link from 'next/link'

// this file, more specifically {{ categories }} is changed before the template
// is used by the web site. JSON is used to keep this file syntactically correct
// jsx. The fun part is that json is probably faster than native objects here.
//
// A category is in this shape:
// id: number
// number: number
// category: string
// title: string
// subtitle: string
// url: string
const points = JSON.parse(`{{ punten }}`) // eslint-disable-line quotes
const categories = JSON.parse(`{{ categories }}`) // eslint-disable-line quotes

export default class visie extends Component {
  render () {
    return (
      <div className='bvPage'>
        <TheHead />
        <HomeNav />
        <Hero heroTab='visie' />
        <div className='home-body'>
          <section className='section'>
            <div className='columns has-text-centered'>
              <div className='column is-6 is-offset-3'>
                <h3 className='title emp'>
                  Niet links. Niet rechts. Voorwaarts.
                </h3>
                <h4 className='subtitle'>
                  Polarisatie en tribalisme is vermoeiend. Het is tijd voor
                  pragmatische oplossingen om Nederland een gids te maken in de
                  21ste eeuw. Als economie en samenleving.
                </h4>
              </div>
            </div>
          </section>
          <section className='section'>
            <div className='columns'>
              <div className='column is-8 is-offset-2'>
                <div
                  style={{ flexWrap: 'wrap' }}
                  className='columns has-text-centered'
                >
                  {points.main.map((obj) =>
                    <div key={obj.id} className='column main_category'>
                      <div className='box'>
                        <Link href={`${'/visie/' + obj.url}`}>
                          <h1 className='title link'>
                            {obj.title}
                          </h1>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className='section'>
            <div className='columns'>
              {categories
                .filter(x => x !== 'main')
                .map(x => [x, points[x]])
                .map(x =>
                  <div key={'cat' + x[0]} className='column is-8 is-offset-2'>
                    <div className='container has-text-centered'>
                      <h2 className='title'>{x[0]}</h2>
                      <br />
                    </div>
                    <div className='columns has-text-centered'>
                      <div className='column'>
                        <ul className='policies'>
                          {x[1].map((y) =>
                            <li key={y.id}>
                              <Link href={'/visie/' + y.url}>
                                <a>{y.title}</a>
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>)}
            </div>
          </section>
        </div>

        <Footer />

        <style jsx>{`
            .main_category {
              min-width:381px
            }
            .box a h1 :hover {
              color: orange;
            }
            .link :hover {
              cursor:pointer;
              color: orange;
            }

            .home-body {
              background: white;
            }

            ul.policies{
              min-width:20rem;
              text-align:center;
            }

            ul.policies a {
              font-size: 1.5rem;
              color: orange;
            }

            ul.policies li {
              display:inline-block;
              width:33%;
              min-width:18rem;
            }

            .box a h1 :hover {
              color: orange;
            }

            .fas,
            .far {
              font-size: 3.5rem;
              opacity: 0.3;
              padding: 1rem;
            }
        `}
        </style>
      </div>
    )
  }
}
