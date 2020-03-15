// eslint-disable-line quotes

import React, { Component } from 'react'
import TheHead from '../../components/TheHead'
import Footer from '../../components/Footer'
import PolicyTemplate from '../../components/PolicyTemplate'
import PolicyHero from '../../components/PolicyHero'
import TheNav from '../../components/TheNav'
const title = `Politiek als oneindig spel` // eslint-disable-line quotes
const subtitle = `` // eslint-disable-line quotes
const content = [<div key='contentwrapper'><p>Er bestaan volgens Simon Sinek twee soorten spellen: Oneindige spellen en
eindige spellen. Eindige spellen hebben vaste regels, kennen winnaars en
verliezers, en hebben een einde. Voetbal is hier een mooi voorbeeld van.
Oneindige spellen hebben echter geen einde. Ook zijn er geen winnaars en
verliezers omdat het spel altijd door blijft gaan. Tenslotte zijn er geen
regels. Iedereen mag zelf weten hoe hij het spel speelt.</p>
<p>Het doel in oneindige spellen is om op de langere termijn door te kunnen blijven
spelen.</p>
<p>Wat wij momenteel echter in ons bedrijfsleven zien, is dat er continu eindige
spellen worden gespeeld, terwijl het spel van de markt helemaal geen einde
heeft. Er kunnen dus geen winnaars en verliezers zijn. Deze focus op het eindige
spel en daarmee dus ook de focus op het ‘winnen’ van de competitie heeft echter
nare gevolgen. Veel bedrijven hebben namelijk het idee dat ‘winnen’ betekent dat
ze elk kwartaal betere cijfers hebben als de vorige.</p>
<p>Om deze cijfers te halen doen ze van alles. Ze lobbyen in de politiek om de
regels van ‘hun spel’ te veranderen, ze verlagen de lonen van hun mensen of
ontslaan ze in mindere tijden.</p>
<p>Sinds deze focus op ‘winnen’ echter is ontstaan is er geen oog meer voor de
langere termijn en het oneindige spel van de markt. Er is minder vertrouwen in
onze bedrijven omdat ze continu bezig zijn te ‘winnen’ maar niet te kijken hoe
ze op de langere termijn het beste kunnen presteren, of hoe ze het vertrouwen
bij de mensen kunnen kweken die daarvoor nodig is.</p>
<p>Deze eindige mindset zien we echter ook in onze politiek. Er wordt bijvoorbeeld
al jaren nauwelijks geïnvesteerd in onze samenleving en tijdens de crises wordt
er bezuinigd.</p>
<p>Mensen uit het bedrijfsleven hebben het idee dat alles een eindig spel is
meegenomen naar de politiek en economische beleidstafels. Volgens hen moeten we
elk jaar ervoor zorgen dat de overheid niet te veel schulden maakt met
bijvoorbeeld investeringen. Anders ‘winnen’ we niet het spel van de politiek.
Een spel wat ook steeds minder om de mensen is gaan draaien.</p>
<p>Dat moet anders. Als politiek moeten wij oneindig denken en een visie
uiteenzetten voor de samenleving en economie over 10 tot 20 jaar. Het spel van
de politiek heeft namelijk geen einde. In plaats van bezuinigen op onderwijs,
innovatie en zorg om op de korte termijn een bedacht ‘spel’ te winnen, moeten we
juist investeren in deze dingen omdat ze ons op de langere termijn meer op
zullen leveren dan de de bezuinigen op de korte termijn.</p>
<p>Als beweging willen wij oneindig denken en deze visie schetsen, zodat iedereen
in Nederland de mogelijkheden krijgt een toekomst voor hun zelf te schetsen. Een
toekomst waar we allemaal samen bouwen aan een sterker Nederland, met betere
zorg, beter onderwijs en ontiegelijk veel innovatie. Stap voor stap, met vallen
en opstaan, maar wetende dat de resultaten uiteindelijk zullen komen.</p>
<p>Wij willen:</p>
<ul>
<li><strong>Vrijheidsdividend</strong> van 1.000 euro om mensen een vloer te geven om op te
staan. Een vloer waarmee ze niet onder de armoedegrens hoeven te komen. Een
vloer waarmee alle Nederlanders op de langere termijn gezonder, sterker en
productiever zullen worden.</li>
<li><strong>Investeren</strong> in zorg, onderwijs, politie en infrastructuur om Nederland sterk te
houden op de langere termijn</li>
<li><strong>Democratie-aandelen</strong> van 25 euro per Nederlander om lobby-geld uit Den Haag
te wassen, zodat politiek meer naar de langere termijn kan gaan kijken.</li>
</ul>
</div>] // eslint-disable-line no-use-before-define

export default class text extends Component {
  render () {
    return (
      <div className='bvPage'>
        <TheHead />
        <TheNav />
        <PolicyHero title={title} subtitle={subtitle} />
        <PolicyTemplate>
          {content}
        </PolicyTemplate>
        <Footer />

      </div>)
  }
}
