import React, { Component, Fragment } from 'react';
import TheHead from '../../components/TheHead';
import Footer from '../../components/Footer';
import PolicyTemplate from '../../components/PolicyTemplate';
import PolicyHero from '../../components/PolicyHero';
import TheNav from '../../components/TheNav';

export default class cohesie extends Component {
  render() {
    const title = `
            Sociale Cohesie
            `;

    const subtitle = `
    Onze diversiteit maakt ons sterker. 
            `;

    return (
      <div className="bvPage">
        <TheHead />
        <TheNav />
        <PolicyHero title={title} subtitle={subtitle} />
        <PolicyTemplate>
          <p>
            Hoe sterk onze samenleving is heeft met alles te maken. Het
            be&iuml;nvloedt onze economische groei, onze tripjes naar de
            supermarkt, het aantal uren dat we vrijwilligerswerk doen, het
            draagvlak voor belastingen en nog veel meer. De beste graadmeter om
            te zien hoe sterk onze samenleving is, is door te kijken naar het
            vertrouwen wat er tussen Nederlanders bestaat en ook het vertrouwen
            die Nederlanders in onze overheid hebben. Dit vertrouwen is namelijk
            belangrijk en ook niet iets wat na licht gestegen koopkrachtplaatjes
            verandert.&nbsp;
          </p>
          <p>
            Vertrouwen is namelijk niet iets rationeels wat op cijfers is
            gericht, maar een gevoel dat ontstaat wanneer we merken dat onze
            buurt het beter is gaan doen, of als we perspectief zien op een
            betere toekomst voor ons land en onze kinderen. Het is een gevoel
            dat ontstaat wanneer je het gevoel hebt dat de mensen die ons leiden
            dezelfde doelen als ons hebben.&nbsp;
          </p>
          <p>
            Toch is dit vertrouwen gedaald. In 2017 zeiden 62% van de mensen dat
            ze vertrouwen in de medemens hadden. Slechts 40,8 procent zei
            vertrouwen te hebben in de politiek. Allebei cijfers waarin grote
            verschillen bestaan als we de sociaal-economische achtergrond van
            iemand meewegen.&nbsp;
          </p>
          <p>
            Dit moeten we verbeteren. Zonder dit vertrouwen is het namelijk niet
            mogelijk als land samen ergens naar toe te werken, of politiek
            beleid te voeren waar wij ons allemaal in kunnen vinden. In een
            toekomst waarin meer een meer gebieden in Nederland kunnen gaan
            krimpen door wegvloeiende kansen onder invloed van automatisering
            kan dit vertrouwen alleen maar meer gaan dalen, met grotere sociale
            en politieke afstanden als gevolg. We zullen elkaar steeds minder
            gaan begrijpen.&nbsp;
          </p>
          <p>
            Zonder dit begrip is een voorwaartse samenleving en politiek echter
            niet mogelijk. Het is hoog tijd dit vertrouwen terug te winnen. Tijd
            om de mens eerst te plaatsen.&nbsp;
          </p>
          <p>Wij willen:</p>
          <ul>
            <li>
              <strong>Vrijheidsdividend</strong> van 1.000 euro per maand
              invoeren die het vertrouwen in onze instituties en tussen
              Nederlanders zal vergroten.&nbsp;
            </li>
            <li>
              Investeren in de <strong>leefbaarheid</strong> van krimpgebieden
              in Nederland
            </li>
            <li>
              Nederlands <strong>uitwisselprogramma</strong> waarin Nederlandse
              leerlingen een periode tijdens schooltijd door het land zullen
              reizen om in contact te komen met alle delen van de samenleving
            </li>
            <li>
              <strong>Kunsten</strong> stimuleren
            </li>
            <li>
              Menselijk bbp waarin we andere factoren in onze samenleving
              verwerken zoals levensverwachting, vertrouwen tussen mensen, uren
              vrijwilligerswerk, mentale depressies etc.&nbsp;
            </li>
          </ul>
          <p>
            Vaderschapsverlof verlengen en de <strong>familie</strong> op andere
            manieren versterken met onder andere het vrijheidsdividend. Hierdoor
            zullen mensen weer het optimisme hebben een gezin stabiel te starten
            en ook het gezinsleven verbeteren van tienduizenden families in
            Nederland.
          </p>
        </PolicyTemplate>
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
