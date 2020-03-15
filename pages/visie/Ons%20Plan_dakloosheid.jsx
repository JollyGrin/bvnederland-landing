// eslint-disable-line quotes

import React, { Component } from 'react'
import TheHead from '../../components/TheHead'
import Footer from '../../components/Footer'
import PolicyTemplate from '../../components/PolicyTemplate'
import PolicyHero from '../../components/PolicyHero'
import TheNav from '../../components/TheNav'
const title = `Dakloosheid` // eslint-disable-line quotes
const subtitle = `` // eslint-disable-line quotes
const content = [<div key='contentwrapper'><p>‘Thuis’ is een plek waar we als mensen altijd naar terugkomen. Het is een plek
waar we ons tijdelijk terug kunnen trekken van onze drukke levens daarbuiten.
Een plek waar we met vrienden en familie bijeenkomen. Maar bovenal een plek waar
we ons veilig voelen.</p>
<p>40.000 mensen in Nederland hadden in 2019 deze plek niet. In 2009 waren dit er
18.000.</p>
<p>In de leeftijdscategorie van 18 tot 30 jaar zijn de aantallen verdrievoudigd.
Elk getal representatief voor een leven zonder een echt vooruitzicht op
stabiliteit en zekerheid. Vooruitgang en mentale stabiliteit begint namelijk
‘thuis’.</p>
<p>Deze cijfers zijn natuurlijk schrikbarend. Hoe kan het dat 10 jaar na een
economische crisis het aantal daklozen in ons land verdubbeld en dat het vooral
de jongere mensen in ons land treft. Bovendien is het als we naar de cijfers
kijken niet logisch.</p>
<p>Het is namelijk al lang bekend dat huisvesting een vereiste is voor een goede
gezondheid. Daklozen zijn een van de meest kwetsbare mensen in onze
maatschappij. Mensen zonder een huis zullen gemiddeld gezien veel eerder
doodgaan dan mensen met een huis en terwijl ze leven hebben ze vaker te maken
met ziektes. Indien ze ook nog verslaafd raken kan het onze samenleving met
justitie, politie en zorg ontzettend veel geld kosten. Rutger Bregman beweerde
met verwijzing naar onderzoeken in binnen- en buitenland dat 1 dakloze bij
uitschieters soms een ton kan kosten. Maar de cijfers zijn hier misschien nog
wel het minst veranderd, want de ellende die daklozen ervaren zijn niet in prijs
uit te drukken. Daklozen op straat is blijk van een collectief onvermogen om de
meest kwetsbare mensen in ons land op de been te krijgen. Dit moet anders.</p>
<p>Het belangrijkste om te onthouden is dat dakloosheid vaak geen keuze is. Het
overkomt ons en het zal steeds meer mensen gaan overkomen als de golven van
automatisering ook Nederland steeds meer gaan raken. We moeten dus nu wat doen.</p>
<p>Wij willen:</p>
<ul>
<li>Een <strong>vrijheidsdividend</strong> van 1.000 euro per maand invoeren. Hiermee kan een
persoon met haar toegenomen vrijheid en zelfstandigheid haar leven stapje voor
stapje weer gaan opbouwen. Bijvoorbeeld door samen met anderen een huisje te
huren, kleren voor sollicitaties te kopen en weer rust te vinden. Het zit hem
in de simpele dingen.</li>
<li>Met <strong>woningcorporaties</strong> afspraken maken over de begeleiding van daklozen
naar een goede woonruimte.</li>
<li><strong>Begeleiding</strong> van mensen die vanuit hun positie als dakloze hulp nodig
hebben om weer mee te doen in onze samenleving.</li>
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
