import React, { Component, Fragment } from 'react';
import TheHead from '../../components/TheHead';
import Footer from '../../components/Footer';
import PolicyTemplate from '../../components/PolicyTemplate';
import PolicyHero from '../../components/PolicyHero';
import TheNav from '../../components/TheNav';

export default class data extends Component {
  render() {
    const title = `
            Data als een recht
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
            Er gaan steeds meer geluiden op om mensen een deel te geven van de
            opbrengst van hun persoonlijke data. Wij staan hier als beweging ook
            voor.&nbsp;
          </p>
          <p>
            Dat dit geluid groter wordt is niet zo vreemd, omdat wij als
            maatschappij steeds bewuster zijn geworden van hoe onze data wordt
            gebruikt. Vooral na het Cambridge Analytica schandaal is het
            pijnlijk duidelijk geworden hoe onze persoonlijke data voor
            verkeerde doeleinden gebruikt kan worden. Wat bleek was dat het
            Engelse databedrijf Cambridge Anpplaalytica samen met de
            Brexit-campagne en Trump-campagne gewerkt aan het cre&euml;ren van
            miljoenen unieke kiezersprofielen, om zich vervolgens tot deze
            kiezers te richten om hun politieke stem binnen te halen. De
            betreffende data kwam vooral van Facebook, die dit voorval bewust of
            onbewust ontgaan was. Maar niet alleen zo wordt onze data misbruikt.
            Als we een hypotheek aanvragen zou onze verzekeraar technisch gezien
            onze data opvragen. Als we een sollicitatie doen kan de werkgever
            technisch gezien data over onze persoonlijkheid opvragen. Bedrijven
            zoals Facebook, Twitter en Google verdienen miljarden aan gerichte
            advertenties omdat ze aan adverteerders precies kunnen vertellen
            welke mensen ze het makkelijkste kunnen verleiden.&nbsp;
          </p>
          <p>
            Deze data kan ook voor heel veel goede doeleinden gebruikt worden,
            zoals het helpen van Afrikaanse boeren met hun oogst, of door data
            in te zamelen over slechte buurten in Nederland en zo
            effici&euml;nter deze buurten helpen. Maar we zien dus hoe onze data
            waardevol is en ook vaak zonder dat wij het weten elke dag verzameld
            wordt.&nbsp;
          </p>
          <p>
            Zoals Shoshana Zuboff zegt in haar boek{' '}
            <em>The Age of Surveillance Capitalism: </em>De data die ze
            verzamelen is van ons, maar wordt niet meer voor ons gebruikt. Ze
            weten alles over ons, maar wij weten niks over hoe hun systemen
            werken. En om een idee te krijgen wat voor effect data heeft gehad
            op bijvoorbeeld Google als mega techbedrijf hoeven we enkel naar hun
            winsten te kijken vanaf het moment dat ze onze data gingen verkopen
            voor andermans doelen (die van de adverteerders): In de testfase in
            2001 sprong hun omzet naar 86 miljoen dollar (een verviervoudiging
            t.o.v. 2000), waarna het 347 miljoen in 2002 werd en 1,5 miljard (!)
            in 2003 en 3,2 miljard in 2004.&nbsp;
          </p>
          <p>
            We zien dus hoe waardevol onze data is voor deze bedrijven en
            gegeven het feit dat de waarde van data volgens velen de waarde van
            olie heeft overtroffen, zouden we de vraag kunnen stellen: Waarom
            krijgen wij geen deel van deze data-opbrengst? Wij zeggen dat data
            en technologie de olie van de 21ste eeuw zijn en dat wij hier een
            data-dividend voor moeten krijgen, gecombineerd met andere
            individuele rechten die nu in gevaar zijn.&nbsp;
          </p>
          <p>
            De rol van data zal namelijk alleen maar groter worden tijdens de
            Vierde Industri&euml;le Revolutie waarin we nu zitten en eigenaars
            van onze eigen persoonlijke gegevens horen wij hier een deel van te
            krijgen. De tech-bedrijven zijn ontzettend slim in het steeds verder
            verzamelen van onze data en het te doen lijken alsof er niks aan de
            hand is. De huidige privacy-wet is niet genoeg. Hiertegenover moeten
            we nog meer fundamentele data-rechten zetten en een manier om de
            waarde van onze data via het data-dividend terug te krijgen.&nbsp;
          </p>
          <p>
            Niet alleen om onze menselijkheid te beschermen, maar ook onze
            democratie.&nbsp;
          </p>
          <p>Wij willen:</p>
          <p>Individuele data-rechten toekennen aan alle Nederlanders:</p>
          <ul>
            <li>
              <strong>Recht</strong> om vergeten te worden; de optie te hebben
              jou datagegevens te kunnen verwijderen.
            </li>
            <li>
              <strong>Recht</strong> om geinformeerd te worden wat er precies
              met jou data precies zal gebeuren
            </li>
            <li>
              Het <strong>recht</strong> om je terug te trekken uit het actieve
              data verzamelingsproces van bedrijven
            </li>
            <li>
              Het <strong>recht</strong> om te weten welke data een website over
              jou heeft.&nbsp;
            </li>
            <li>
              Via een digi-tax op grote tech-bedrijven hun winst de{' '}
              <strong>waarde</strong> opvangen van onze data en deze via het{' '}
              <strong>vrijheidsdividend</strong> van 1.000 euro per maand
              verdelen onder alle Nederlanders. Het kan hierdoor als een soort
              robot-belasting gezien worden die de collectief gecre&euml;erde
              welvaart van technologie opvangt.&nbsp;
            </li>
          </ul>
        </PolicyTemplate>
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
