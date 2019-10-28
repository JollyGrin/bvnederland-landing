import React, { Component, Fragment } from 'react';
import TheHead from '../../components/TheHead';
import Footer from '../../components/Footer';
import PolicyTemplate from '../../components/PolicyTemplate';
import PolicyHero from '../../components/PolicyHero';
import TheNav from '../../components/TheNav';

export default class oneindigspel extends Component {
  render() {
    const title = `
    Van politiek beleid een oneindig spel maken
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
            Er bestaan volgens Simon Sinek twee soorten spellen: Oneindige
            spellen en eindige spellen. Eindige spellen hebben vaste regels,
            kennen winnaars en verliezers, en hebben een einde. Voetbal is hier
            een mooi voorbeeld van. Oneindige spellen hebben echter geen einde.
            Ook zijn er geen winnaars en verliezers omdat het spel altijd door
            blijft gaan. Tenslotte zijn er geen regels. Iedereen mag zelf weten
            hoe hij het spel speelt.&nbsp;
          </p>
          <p>
            Het doel in oneindige spellen is om op de langere termijn door te
            kunnen blijven spelen.&nbsp;
          </p>
          <p>
            Wat wij momenteel echter in ons bedrijfsleven zien, is dat er
            continu eindige spellen worden gespeeld, terwijl het spel van de
            markt helemaal geen einde heeft. Er kunnen dus geen winnaars en
            verliezers zijn. Deze focus op het eindige spel en daarmee dus ook
            de focus op het &lsquo;winnen&rsquo; van de competitie heeft echter
            nare gevolgen. Veel bedrijven hebben namelijk het idee dat
            &lsquo;winnen&rsquo; betekent dat ze elk kwartaal betere cijfers
            hebben als de vorige.&nbsp;
          </p>
          <p>
            Om deze cijfers te halen doen ze van alles. Ze lobbyen in de
            politiek om de regels van &lsquo;hun spel&rsquo; te veranderen, ze
            verlagen de lonen van hun mensen of ontslaan ze in mindere
            tijden.&nbsp;
          </p>
          <p>
            Sinds deze focus op &lsquo;winnen&rsquo; echter is ontstaan is er
            geen oog meer voor de langere termijn en het oneindige spel van de
            markt. Er is minder vertrouwen in onze bedrijven omdat ze continu
            bezig zijn te &lsquo;winnen&rsquo; maar niet te kijken hoe ze op de
            langere termijn het beste kunnen presteren, of hoe ze het vertrouwen
            bij de mensen kunnen kweken die daarvoor nodig is.&nbsp;
          </p>
          <p>
            Deze eindige mindset zien we echter ook in onze politiek. Er wordt
            bijvoorbeeld al jaren nauwelijks ge&iuml;nvesteerd in onze
            samenleving en tijdens de crises wordt er bezuinigd.&nbsp;
          </p>
          <p>
            Mensen uit het bedrijfsleven hebben het idee dat alles een eindig
            spel is meegenomen naar de politiek en economische beleidstafels.
            Volgens hen moeten we elk jaar ervoor zorgen dat de overheid niet te
            veel schulden maakt met bijvoorbeeld investeringen. Anders
            &lsquo;winnen&rsquo; we niet het spel van de politiek. Een spel wat
            ook steeds minder om de mensen is gaan draaien.
          </p>
          <p>
            Dat moet anders. Als politiek moeten wij oneindig denken en een
            visie uiteenzetten voor de samenleving en economie over 10 tot 20
            jaar. Het spel van de politiek heeft namelijk geen einde. In plaats
            van bezuinigen op onderwijs, innovatie en zorg om op de korte
            termijn een bedacht &lsquo;spel&rsquo; te winnen, moeten we juist
            investeren in deze dingen omdat ze ons op de langere termijn meer op
            zullen leveren dan de de bezuinigen op de korte termijn.&nbsp;
          </p>
          <p>
            Als beweging willen wij oneindig denken en deze visie schetsen,
            zodat iedereen in Nederland de mogelijkheden krijgt een toekomst
            voor hun zelf te schetsen. Een toekomst waar we allemaal samen
            bouwen aan een sterker Nederland, met betere zorg, beter onderwijs
            en ontiegelijk veel innovatie. Stap voor stap, met vallen en
            opstaan, maar wetende dat de resultaten uiteindelijk zullen
            komen.&nbsp;
          </p>
          <p>Wij willen:&nbsp;</p>
          <ul>
            <li>
              <strong>Vrijheidsdividend</strong> van 1.000 euro om mensen een
              vloer te geven om op te staan. Een vloer waarmee ze niet onder de
              armoedegrens hoeven te komen. Een vloer waarmee alle Nederlanders
              op de langere termijn gezonder, sterker en productiever zullen
              worden.&nbsp;
            </li>
            <li>
              <strong>Investeren</strong> in zorg, onderwijs, politie en
              infrastructuur om Nederland sterk te houden op de langere termijn
            </li>
            <li>
              <strong>Democratie-aandelen</strong> van 25 euro per Nederlander
              om lobby-geld uit Den Haag te wassen, zodat politiek meer naar de
              langere termijn kan gaan kijken.
            </li>
          </ul>
        </PolicyTemplate>
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
