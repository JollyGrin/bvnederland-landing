// eslint-disable-line quotes

import React, { Component } from 'react'
import TheHead from '../../components/TheHead'
import Footer from '../../components/Footer'
import PolicyTemplate from '../../components/PolicyTemplate'
import PolicyHero from '../../components/PolicyHero'
import TheNav from '../../components/TheNav'
const title = `MensenPolitiek` // eslint-disable-line quotes
const subtitle = `Politiek en samenleving waarin de mens eerst staat.` // eslint-disable-line quotes
const content = [<div key='contentwrapper'><p>Als een slimme CEO zijn bedrijfsvoering bedenkt zal hij altijd een omgeving
proberen te creëren waarin mensen elkaar kunnen vertrouwen. Dit kan lastig zijn.
Bedrijven hebben namelijk altijd te maken met dreiging van buiten, bijvoorbeeld
van concurrentie. Dit kan ertoe leiden dat de CEO juist te veel nadruk gaat
leggen op het behalen van goede bedrijfsresultaten, zonder bij de basis te
beginnen van lange termijn succes, namelijk het vertrouwen tussen mensen. Zonder
dit vertrouwen is het niet mogelijk een cultuur te creëren waarin mensen naar
elkaar toe trekken en samen gaan werken om het bedrijf innovatiever en sterker
te maken. Alle succesvolle bedrijven zoals Apple onder Steve Jobs en Microsoft
onder Bill Gates konden stabiel en innovatief blijven omdat er veel vertrouwen
was onder de werknemers. Toch wordt Nederland niet op dezelfde manier gerund. We
hebben een sociaal systeem wat ontzettend inefficiënt is en mensen continu
wantrouwt. Daarnaast hebben veel mensen door stijgende armoede het vertrouwen in
de politiek verloren.</p>
<p>De politiek is vergeten de mens eerst te stellen.</p>
<p>Als we echter voorwaarts willen gaan in Nederland is het zaak dat we een
organisatie bouwen waarin de mens wel op een staat. Als de overheid zijnde is
het namelijk zaak dat we onze mensen beschermen tegen de dreiging van buiten,
zoals automatisering. Pas dan kunnen we erop vertrouwen dat de mensen ons land
willen beschermen en zich vol inzetten voor ons gezamenlijk doel, namelijk een
mooier Nederland. Als het met de mensen goed gaat komen de andere resultaten
vanzelf, met een sterkere economie en samenleving als gevolg. Elke CEO weet dit,
nu wij nog;</p>
<p>Wij willen dit met deze maatregelen doen:</p>
<ul>
<li><strong>Vrijheidsdividend</strong> van 1.000 euro per maand die het vertrouwen tussen
mensen en in onze instituties zal vergroten</li>
<li><strong>Menselijk bbp</strong> waarin we niet de cijfers op 1 stellen, maar menselijke
factoren meenemen zoals onze levensverwachting en fysieke gezondheid.</li>
<li><strong>Versimpeling van belasting en sociale stelsel</strong> met als gevolg minder
bureaucratie en meer vertrouwen in mensen door minder controles.</li>
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
