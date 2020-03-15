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
const points = JSON.parse(`{"Ons Plan":[{"id":3,"slug":"onderwijs","category":"Ons Plan","title":"Voorwaarts Onderwijs","subtitle":"","url":"Ons%20Plan_onderwijs"},{"id":4,"slug":"huisvesting","category":"Ons Plan","title":"Huisvesting","subtitle":"","url":"Ons%20Plan_huisvesting"},{"id":5,"slug":"mindset_van_overvloed","category":"Ons Plan","title":"Mindset van Overvloed","subtitle":"","url":"Ons%20Plan_mindset_van_overvloed"},{"id":6,"slug":"dakloosheid","category":"Ons Plan","title":"Dakloosheid","subtitle":"","url":"Ons%20Plan_dakloosheid"},{"id":7,"slug":"sociale_cohesie","category":"Ons Plan","title":"Sociale Cohesie","subtitle":"Onze diversiteit maakt ons sterker.","url":"Ons%20Plan_sociale_cohesie"},{"id":8,"slug":"data","category":"Ons Plan","title":"Data als een recht","subtitle":"","url":"Ons%20Plan_data"},{"id":9,"slug":"menselijk_bbp","category":"Ons Plan","title":"Een Menselijk bbp","subtitle":"","url":"Ons%20Plan_menselijk_bbp"},{"id":10,"slug":"21e_eeuwse_economie","category":"Ons Plan","title":"21e-eeuwse economie","subtitle":"","url":"Ons%20Plan_21e_eeuwse_economie"},{"id":11,"slug":"zorg","category":"Ons Plan","title":"Zorg","subtitle":"","url":"Ons%20Plan_zorg"},{"id":12,"slug":"klimaat","category":"Ons Plan","title":"Klimaat","subtitle":"","url":"Ons%20Plan_klimaat"},{"id":13,"slug":"mensenpolitiek","category":"Ons Plan","title":"MensenPolitiek","subtitle":"Politiek en samenleving waarin de mens eerst staat.","url":"Ons%20Plan_mensenpolitiek"},{"id":14,"slug":"oneindig_spel","category":"Ons Plan","title":"Politiek als oneindig spel","subtitle":"","url":"Ons%20Plan_oneindig_spel"}],"main":[{"id":0,"slug":"vrijheidsdividend","category":"main","title":"Vrijheidsdividend","subtitle":"","url":"main_vrijheidsdividend"},{"id":1,"slug":"democratie","category":"main","title":"Democratie","subtitle":"","url":"main_democratie"},{"id":2,"slug":"menselijk_kapitalisme","category":"main","title":"Menselijk kapitalisme","subtitle":"Kapitalisme waarbij de mens op één staat.","url":"main_menselijk_kapitalisme"}]}`) // eslint-disable-line quotes
const categories = JSON.parse(`["Ons Plan","main"]`) // eslint-disable-line quotes

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
