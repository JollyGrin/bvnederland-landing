// eslint-disable-line quotes

import React, { Component } from 'react'
import TheHead from '../../components/TheHead'
import Footer from '../../components/Footer'
import PolicyTemplate from '../../components/PolicyTemplate'
import PolicyHero from '../../components/PolicyHero'
import TheNav from '../../components/TheNav'
const title = `Democratie` // eslint-disable-line quotes
const subtitle = `` // eslint-disable-line quotes
const content = [<div key='contentwrapper'><p>In Nederland leven we in een liberale democratie. Liberaal omdat we via de wet
individuele rechten garanderen aan alle Nederlanders en democratisch omdat we
via electorale instituties zoals de Tweede Kamer ervoor zorgen dat de meningen
in ons land vertaald worden naar beleid. Hier moeten we trots op zijn.</p>
<p>Toch zien we in allerlei landen vooral de liberale kant van onze westerse
democratieën onder vuur liggen. Met veel geluid komen democratisch verkozen
leiders aan de macht, die voedend op de woede van vele mensen de vrijheden van
minderheden bedreigen. Ze zijn illiberaal.</p>
<p>De woede van mensen die het gevoel hebben niet gehoord te worden is terecht. Als
westerse wereld en ook als Nederland zijnde is het ons niet gelukt als politiek
samen te werken om de verliezers van automatisering en globalisering hoop op een
betere toekomst te geven tijdens de Vierde Industriële Revolutie waar we nu
middenin zitten. Het vertrouwen in onze instituties en in tussen mensen
ondertussen lager dan ooit. Daarnaast is onze politiek steeds ondemocratischer
geworden. Terwijl wij om de vier jaar onze stem uitbrengen, hebben grote
lobbygroepen elke dag de kans om overwerkte Kamerleden te beïnvloeden. Onze
politiek werkt hierdoor niet meer voor de mensen. Het roept vragen bij ons op
wat te doen. We kunnen het als land niet accepteren dat er Nederlanders bestaan
zonder geloof in de toekomst. We hebben het altijd beter gedaan dan dit. We
moeten antwoorden vinden op de uitdaging van bijvoorbeeld technologie willen we
vooruit komen.</p>
<p>Wat wij willen om de democratie in ons land te herstellen is ten eerste een
vrijheidsdividend ervoor gaan zorgen dat elke Nederlander de maand door kan
komen en ook een basis heeft indien zij hun baan verliezen. Als we deze
problemen namelijk niet oplossen, zal onze maatschappij en politiek alleen maar
meer polariseren, met illiberale neigingen als gevolg.</p>
<p>Ten tweede moeten we elke Nederlander een democratie-aandeel geven van 25 euro
per jaar om aan een landelijke (plaatselijke) politieke partij of Kamerlid, of
pte geven. Dit zal niet alleen onze democratie versterken door Kamerleden en
partijen meer kracht te geven, maar zal er ook voor zorgen dat zij niet meer
gevoelig zijn voor de invloed van lobby-groepen.</p>
<p>De democratie-aandelen van alle Nederlanders bij elkaar (400 +- miljoen) zijn
namelijk veel groter dan het lobby-geld van bedrijven realistisch gezien ooit
kan worden.</p>
<p>Onze politiek kan hierdoor weer echt de tijd nemen onderzoek naar wetten uit te
besteden, in plaats van dat lobbyisten deze doorberekende rapporten kant en
klaar aan onze Kamerleden geven, met als gevolg een wet die niet voor de mensen
is gemaakt.</p>
<p>Tenslotte willen wij directe referenda en direct gekozen burgemeesters zodat de
mensen die in ons land vertegenwoordigd worden ook de kans hebben hier een stem
in te hebben.</p>
<p>Om onze politiek systeem en democratie dus gezonder en eerlijker te maken willen wij dus:</p>
<ul>
<li><strong>Democratie-aandelen</strong> van 25 euro per Nederlander.</li>
<li><strong>Direct gekozen burgemeesters</strong></li>
<li><strong>Directe referenda</strong></li>
<li><strong>Vrijheidsdividend</strong> om polarisatie tegen te gaan en mensen meer tijd te geven voor democratische participatie.</li>
<li><strong>Meer sociaal contact</strong> tussen overheidsmedewerkers (politici etc.) stimuleren zodat onderling vertrouwen en begrip versterkt wordt. Hierdoor zullen er uiteindelijk minder moties en debatten aangevraagd worden, minder polarisatie zijn en wetten kunnen sneller behandeld worden. Als maatregelen kunnen we hierbij denken aan het faciliteren van de mogelijkheid voor politici om in Den Haag te wonen, met als gevolg meer onderling contact buiten de context van de Tweede Kamer.</li>
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
