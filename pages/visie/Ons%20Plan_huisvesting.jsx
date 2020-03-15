// eslint-disable-line quotes

import React, { Component } from 'react'
import TheHead from '../../components/TheHead'
import Footer from '../../components/Footer'
import PolicyTemplate from '../../components/PolicyTemplate'
import PolicyHero from '../../components/PolicyHero'
import TheNav from '../../components/TheNav'
const title = `Huisvesting` // eslint-disable-line quotes
const subtitle = `` // eslint-disable-line quotes
const content = [<div key='contentwrapper'><h2>Huisvesting en betaalbaar wonen</h2>
<p>Als een politicus tijdens zijn campagne zegt dat hij de prijs van boter en brood
wil verhogen zal iedereen hem raar aankijken. Toch hebben politici jarenlang
soort van hetzelfde gedaan met een deel van ons leven en uitgavenpatroon. De
prijzen van huizen zijn namelijk exponentieel gestegen de laatste jaren. Vooral
in de Randstad. Vaak worden de verklaringen hiervoor gegeven door een kamp die
zegt dat het door de grote vermogens komt die met veel geld alles opkopen, en
aan de andere kant een kamp die zegt dat er te weinig gebouwd wordt. Allebei
klopt het echter, want de problemen die we momenteel hebben zijn aan de ene kant
een probleem van marktfalen en aan de andere kant planfalen. Het is dus taak om
iets te veranderen. Het is namelijk niet logisch om huizenprijzen dusdanig hoog
te houden. Het duwt lagere inkomensklassen uit de stad waar veel economische
mogelijkheden voor hen zijn, met lagere sociale mobiliteit als gevolg. Het stokt
economische groei doordat mensen minder uit kunnen geven en is ook een teken dat
onze overheid ons niet aan het meest noodzakelijke kan helpen, namelijk een
thuis waar we in een leefbare buurt tijd kunnen doorbrengen met onze familie,
vrienden en buurtgenoten. Als we de mens op een willen zetten is dit beleid dus
niet logisch. Als we naar de kosten kijken van slechte huisvesting al helemaal
niet.</p>
<p>Wij willen:</p>
<ul>
<li>Huisvesting garanderen voor elke Nederlander</li>
<li>Woningcorporaties meer mogelijkheden geven betaalbare woningen te bouwen en
aan te bieden.</li>
<li>Maximum instellen op huren.</li>
<li>In de leefbaarheid van buurten investeren ten behoeve van bijvoorbeeld sociale
cohesie.</li>
<li>In krimpgebieden kijken hoe er geïnvesteerd kan worden in bijvoorbeeld
onderwijs en infrastructuur. Dit kan in combinatie met het vrijheidsdividend
van 1.000 euro per maand ervoor zorgen dat deze gebieden weer kunnen opleven
en ook interessant worden voor mensen die buiten de Randstad op zoek zijn naar
een huis. Dit zal een efficiënte manier zijn om de beschikbare huizen op te
vullen en ook meer diversiteit in gebieden in Nederland creëren.</li>
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
