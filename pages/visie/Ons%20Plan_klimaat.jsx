// eslint-disable-line quotes

import React, { Component } from 'react'
import TheHead from '../../components/TheHead'
import Footer from '../../components/Footer'
import PolicyTemplate from '../../components/PolicyTemplate'
import PolicyHero from '../../components/PolicyHero'
import TheNav from '../../components/TheNav'
const title = `Klimaat` // eslint-disable-line quotes
const subtitle = `` // eslint-disable-line quotes
const content = [<div key='contentwrapper'><p>Klimaatverandering is een existentiële bedreiging en we moeten erkennen dat we
de negatieve effecten al doormaken. Daarnaast zijn de mensen die het meest door
deze gevolgen of klimaatverandering worden getroffen, het minst in staat om
hiermee om te gaan. Het juiste moment om deze crisis het hoofd te bieden was
decennia geleden. We hebben te lang gewacht, dus we moeten snel handelen en
erkennen dat alle opties op tafel moeten liggen om ons aan te passen aan de
veranderde wereld waarin we leven, terwijl we gedragingen verminderen die het
erger maken en de schade ongedaan maken die we al hebben gedaan. We kunnen geen
ideeën negeren, vooral die met steun van de wetenschappelijke gemeenschap, of
iets uitsluiten omdat het niet binnen ons ideologische kader past. Zeker niet
omdat wij als Nederland, ondanks onze kleine grootte, veel uitstoten.</p>
<p>Tegelijkertijd is het ook belangrijk dat we niemand achterlaten tijdens de
overgang naar een meer duurzaam Nederland. Klimaatbeleid kost namelijk veel geld
en verandering, juist in een tijd waarin veel mensen in onzekerheid leven.
Onzekerheid gaat niet samen met verandering.</p>
<p>Het gebrek aan geld wat veel mensen namelijk ervaren zorgt ervoor dat we
gezamenlijk in een tunnelvisie terechtkomen waarin we alleen nog maar kunnen
denken aan ons gebrek. Wat eten we morgen? Hoe ga ik de rekeningen betalen? Hoe
gaan mijn kinderen studeren? We kunnen ons hierdoor enkel met korte-termijn
dingen bezig houden, en nadenken over wat voor Nederland we willen achterlaten
voor onze kinderen is dan niet mogelijk. We moeten mensen dus uit deze tunnel
halen door ze onder andere een vloer te geven waarop ze kunnen staan. Het
vrijheidsdividend van 1.000 euro per maand zal dit doen.</p>
<p>Tenslotte hebben we in het verleden als mensheid altijd samen alle mogelijkheden
aangepakt ons aan te passen aan onze omgeving. Of dat nu door technologische
innovatie of dijken was. Onze omgeving verandert nu veel sneller dan normaal.
Als we echter als mensen en als land weer samen de handschoen oppakken om
Nederland duurzaam en innovatief te worden, zullen we niet alleen weer een
voorbeeld worden voor de rest van de wereld, maar ook aantonen dat samenwerken
mogelijk is. Dat voorwaarts klimaatbeleid mogelijk is.</p>
<p>Wij willen:</p>
<ul>
<li>Investeren in <strong>groene</strong> technologie</li>
<li><strong>Samenwerking</strong> aangaan met Terra Power om hun kerncentrales in Nederland
neer te zetten. Hun type kerncentrales kunnen thorium ontwikkelen en daarnaast
ook het restafval wat normaal gevaarlijk is hergebruiken om weer energie mee
op te wekken. Het is na tientallen jaren van stilstand de nieuwste innovatie
op het gebied van kernenergie en zal ons helpen de energietransitie samen met
andere energiebronnen zoals wind en zon met zelfvertrouwen aan te gaan.</li>
<li>Ondernemers en mensen <strong>compenseren</strong> indien klimaatbeleid hen onevenredig
hard raakt</li>
<li><strong>Vrijheidsdividend</strong> invoeren zodat mensen mee kunnen komen tijdens de
klimaattransitie.</li>
<li>Volledig klimaatplan opstellen tijdens campagne</li>
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
