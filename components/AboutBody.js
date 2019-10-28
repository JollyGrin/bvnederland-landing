import React, { Component, Fragment } from 'react';
import Link from 'next/link';

export default class AboutBody extends Component {
  render() {
    return (
      <Fragment>
        <div className="home-body">
          <section className="section">
            <div className="columns has-text-centered">
              <div className="column is-6 is-offset-3">
                <h3 className="title emp">Over Ons</h3>
                {/* <h4 className="subtitle">
                  Dit is meer dan een politieke partij, het is een visie.
                  <br />
                  Wij gaan dit een beetje anders doen.
                </h4> */}
              </div>
            </div>
            <br /> <br />
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <p>
                  Beweging Voorwaarts is een politieke beweging gestart door een
                  19 jarige student , samen met een groep mensen die eveneens
                  geloofde dat een verschuiving in het huidige politieke
                  landschap mogelijk is. Momenteel schrijft hij aan zijn boek
                  (het vrijheidsdividend en onze toekomst) en terwijl hij
                  hiervoor onderzoek deed en geinspireerd raakte door de
                  Amerikaanse presidentskandidaat Andrew Yang, kreeg hij echter
                  steeds meer het gevoel dat er in Nederland niet over de grote
                  uitdagingen van onze tijd wordt gesproken, zoals de toenemende
                  automatisering van onze economie, met steeds meer armoede als
                  gevolg. Zo heeft 20% van de Nederlanders helemaal geen
                  spaargeld en nog eens 20% hoogstens 2.000 euro aan spaargeld.
                  Hierdoor leeft een groot deel van de populatie in onzekerheid.
                  Dit moet anders en wij denken dat daar een nieuwe politiek
                  voor nodig is. Een politiek voor Nederland waarin iedereen de
                  kans heeft zich te ontwikkelen tot de persoon die ze willen
                  worden. Een politiek waarin iedereen tijdens de Vierde
                  Industriele revolutie waar we nu middenin zitten, de kans
                  heeft zijn waardigheid als mens en burger van dit land te
                  behouden. Waarin Nederlanders de kans krijgen hoop en
                  perspectief te hebben op een betere toekomst. En dat zit hem
                  in de kleine dingen: van je niet zorgen hoeven maken over hoe
                  er eten op tafel komt, tot je kinderen 'gewoon' kunnen laten
                  studeren. Bij deze politiek hoort volgens ons een
                  vrijheidsdividend van 1.000 euro per maand voor elke
                  Nederlander, als basis waarop we voort kunnen bouwen. Wij
                  hopen dat zoveel mogelijk mensen mee gaan doen. Want iedereen
                  mag mee doen. Met onze beweging en in onze maatschappij.
                  Alleen dan kunnen we voorwaarts.
                </p>
              </div>
            </div>
            <br /> <br />
          </section>
        </div>

        <style jsx>{`
          .home-body {
            background: white;
          }

          .box {
            color: #363636;
          }

          .siggy {
            display: flex;
            align-items: flex-end;
          }

          .fas,
          .far {
            font-size: 3.5rem;
          }
        `}</style>
      </Fragment>
    );
  }
}
