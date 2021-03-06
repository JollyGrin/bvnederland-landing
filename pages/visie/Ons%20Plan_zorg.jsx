// eslint-disable-line quotes

import React, { Component } from 'react'
import TheHead from '../../components/TheHead'
import Footer from '../../components/Footer'
import PolicyTemplate from '../../components/PolicyTemplate'
import PolicyHero from '../../components/PolicyHero'
import TheNav from '../../components/TheNav'
const title = `Zorg` // eslint-disable-line quotes
const subtitle = `` // eslint-disable-line quotes
const content = [<div key='contentwrapper'><p>Sommige dingen in onze maatschappij zijn niet in prijs uit te drukken. Weten dat
onze ouderen genoeg aandacht krijgen na hun grote bijdrage aan het opbouwen van
Nederland is daar een van. Het gevoel van zekerheid dat jouw basiszorg geregeld
is in tijden van nood is daar een van. Een goede gezondheid van onze
beroepsbevolking ook.</p>
<p>Toch heeft onze zorg en indirect onze gezondheid een directe prijs gekregen door
de financialisatie van ons zorgstelsel. Onder invloed van de markt zou onze zorg
beter, transparanter en efficiënter worden. In plaats daarvan is onze zorg
alleen maar duurder geworden en weegt het als last op onze gezondheid en
economie. Ook de bureaucratie rijst de pan uit. Mensen in de zorg kunnen niet
meer zorgen.</p>
<p>De markt op zich is niet slecht en het is met goede bedoelingen geïntroduceerd,
maar als de resultaten achterblijven moeten we met oog op de toekomst onze zorg
gaan omgooien.</p>
<p>Iets als zorg staat namelijk symbool voor hoe een land voor zijn mensen zorgt en
de hoeveelheid verantwoordelijkheid die zij voor hun burgers neemt. Zorg staat
voor onze welvaart en zou juist boven de markt uit moeten stijgen. Iets wat niet
in prijs uit te drukken is kunnen we niet efficiënter maken. We kunnen het
alleen makkelijker maken.</p>
<p>Tenslotte moeten we ook op andere manieren onze mensen gezonder maken. Mentale
depressies zijn hoger dan ooit en onze levensverwachting is voor het eerst in
jaren gedaald. Ook is ons medicijn en alcoholgebruik ongewoon gestegen. Dit moet
ons zorgen maken, niet alleen omdat hierbinnen grote verschillen bestaan tussen
arm en rijk, maar ook omdat in de toekomst veel mensen hun baan dreigen te
verliezen. Als wij hen dan niet opvangen met goede zorg en een vaste
inkomensvloer kunnen we hen uit het oog verliezen met nog slechtere
gezondheidsresultaten als gevolg. Daarom willen wij met ons vrijheidsdividend
van 1.000 euro per maand onze mensen gezonder maken en ook meer zekerheid geven
zodat stress geen dagelijkse kost is.</p>
<p>Voorkomen is beter dan genezen en onze zorg niet op orde hebben is niet logisch
als we naar de cijfers kijken. Niet logisch voor ons en niet logisch voor onze
economie.</p>
<p>Wij willen daarom:</p>
<ul>
<li><strong>Gratis basiszorg</strong> voor iedereen garanderen</li>
<li>Eigen risico verlagen naar <strong>maximaal</strong> 200 euro.</li>
<li><strong>Terugdringen bureaucratie</strong> zodat er meer geld beschikbaar blijft voor echte
zorg.</li>
<li><strong>Vrijheidsdividend</strong> van 1.000 euro per maand om Nederlanders gezonder en
sterker te makne</li>
<li><strong>Financialisatie</strong> van zorg terugdringen door winstuitkeringen van
zorgverzekeraars te limiteren.</li>
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
