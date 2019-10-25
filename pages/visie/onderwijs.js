import React, { Component, Fragment } from 'react';
import TheHead from '../../components/TheHead';
import Footer from '../../components/Footer';
import PolicyTemplate from '../../components/PolicyTemplate';
import PolicyHero from '../../components/PolicyHero';
import TheNav from '../../components/TheNav';

export default class onderwijs extends Component {
  render() {
    const title = `
            Voorwaarts Onderwijs
            `;

    const subtitle = `
              
            `;

    return (
      <div className="bvPage">
        <TheHead />
        <TheNav />
        <PolicyHero title={title} subtitle={subtitle} />
        <PolicyTemplate>
          <p>
            75% van een kind prestaties wordt bepaald buiten het klaslokaal.
            Hoeveel tijd brengen ze door met hun ouders? Hoe goed is de
            thuissituatie? In wat voor buurt wonen ze en hoeveel kansen krijgen
            ze om culturele ervaringen op te doen?&nbsp;
          </p>
          <p>
            Deze kansen tussen kinderen worden ook steeds meer ongelijk, met
            slechtere sociale mobiliteit als gevolg. Dit is niet alleen slecht
            voor onze economie omdat we veel talent mislopen, niet alleen slecht
            voor onze samenleving omdat we ambitieuze jonge mensen geen kans op
            perspectief geven, maar ook slecht voor ons onderwijs.&nbsp;
          </p>
          <p>
            We hebben niet alleen nagelaten te investeren in onze leraren, maar
            hebben hen ook de verantwoordelijkheid gegeven om voor onze kinderen
            te zorgen. Zorg en aandacht die ouders steeds minder kunnen bieden
            omdat ze minder goed rondkomen en hierdoor ook gestresster
            zijn.&nbsp;
          </p>
          <p>
            Daarnaast is ons onderwijs ook een belangrijke motor van onze
            economie en arbeidsmarkt en deze economie moet innoverend en divers
            blijven zoals die altijd is geweest. Juist zodat we als land de
            beste mensen kunnen blijven leveren.&nbsp;
          </p>
          <p>
            Maar dit begint bij de leerkracht en leerling. Het begint in onze
            samenleving. Het begint bij investeringen. Net zoals dat we in onze
            samenleving de mens weer eerst moeten stellen zullen we dat in het
            onderwijs even goed moeten doen met kleinere klassen, meer kansen
            voor leerlingen. Onderwijs dat ons voorwaarts gaat brengen, op weg
            naar de economie en samenleving van de toekomst.
          </p>
          <p>Wij willen:</p>
          <ul>
            <li>
              <strong>Minder papierwerk</strong> en meer autonomie voor de
              leerkracht. De leraar weet namelijk heel goed wat goed is voor de
              leerling.&nbsp;
            </li>
            <li>
              <strong>Meer investeren</strong> in praktijkonderwijs, mbo en
              beroepsopleidingen.&nbsp;
            </li>
            <li>
              <strong>Vrijheidsdividend</strong> van 1.000 euro per maand zodat
              studenten met zekerheid kunnen studeren en onze leraren en
              kinderen weer kunnen floreren in ons onderwijs.&nbsp;
            </li>
            <li>
              <strong>Gemengde scholen</strong> stimuleren
            </li>
            <li>
              <strong>Kleinere klassen.</strong>
            </li>
          </ul>
        </PolicyTemplate>
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
