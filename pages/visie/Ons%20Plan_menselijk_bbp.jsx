// eslint-disable-line quotes

import React, { Component } from 'react'
import TheHead from '../../components/TheHead'
import Footer from '../../components/Footer'
import PolicyTemplate from '../../components/PolicyTemplate'
import PolicyHero from '../../components/PolicyHero'
import TheNav from '../../components/TheNav'
const title = `Een Menselijk bbp` // eslint-disable-line quotes
const subtitle = `` // eslint-disable-line quotes
const content = [<div key='contentwrapper'><p>We leven in een rare tijd. Naast onze economie die jaren in volle bloei was,
zijn namelijk ook onze zorgkosten erg gestegen, het vertrouwen in de instituties
gedaald, de armoede gestegen en onze levensverwachting voor het eerst in jaren
gedaald. Toch komen deze statistieken niet voor in onze groeicijfers. We moeten
dus kritischer kijken naar onze groei.</p>
<p>Dit betekent niet dat we groei willen vermijden, maar dat we moeten kijken naar
wat voor groei we willen. Groei die wordt bewerkstelligd door innovatie en een
gezonde samenleving? Of groei die wordt bewerkstelligd door oneindig gebruik te
maken van de niet-oneindige grondstoffen van de aarde?</p>
<p>Het bbp is een grote factor van hoe we de economie sturen. Deze stuurwijze wordt
ook weer beïnvloed door hoe we waarde in onze economie definiëren. Als deze
waarde echter enkel op prijs gebaseerd is, kan het zijn dat we de samenleving de
verkeerde kant op sturen. Zo lijken privatiseringen in tijden van crisis
misschien goedkoper voor de staat, maar is het een netto verlies als we kijken
naar wat het met de mensen doet. De overheid zorgt namelijk minder voor hun
welvaart. Dit terwijl de welvaart van de mensen in ons land juist boven de markt
uit zou moeten stijgen. De mensen moeten altijd eerst komen.</p>
<p>De waarde van gezonde mensen in ons land, of de waarde van alle verleende uren
onbetaald werk, zijn namelijk onbetaalbaar en niet in prijs uit te drukken. Toch
erkennen we deze waarde niet en als we dat wel willen is een nieuwe stuurwijze
nodig met een nieuwe manier van kijken naar waarde in onze economie.</p>
<p>Daarom is het belangrijk het bbp aan te vullen met een andere welvaartsfactoren
die concreter te voelen zijn voor mensen in de maatschappij, zodat we een meer
verstandige en menselijke vorm van beleidsvoering kunnen introduceren. Milton
Friedman vond dat een van de grootste fouten van overheidsbeleid was die te
beoordelen op haar intenties, in plaats van op haar resultaten. Het huidige bbp
zal door blijven groeien, met dezelfde slechte resultaten voor de mensen in ons
land. Het is dus tijd voor een herdefiniëring. Het is tijd om de mens op een te
zetten, in ons beleid, maar daarmee ook in ons bbp.</p>
<p>Wij willen in dit nieuwe menselijke bbp deze vormen van welvaart verwerken.</p>
<ul>
<li>Kwaliteit van leven en levensverwachting</li>
<li>Geluk en mentale gezondheid</li>
<li>Kwaliteit van ons milieu</li>
<li>Ondergekwalificeerd werk/aantal goede banen</li>
<li>Inkomensongelijkheid</li>
<li>Hoogte van schulden van mensen in ons land</li>
<li>Aantal uren vrijwiliggerswerk</li>
<li>Kwaliteit van infrastructuur</li>
<li>Medicijngebruik en gerelateerde doden</li>
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
