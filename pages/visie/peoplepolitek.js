import React, { Component, Fragment } from 'react';
import TheHead from '../../components/TheHead';
import Footer from '../../components/Footer';
import PolicyTemplate from '../../components/PolicyTemplate';
import PolicyHero from '../../components/PolicyHero';
import TheNav from '../../components/TheNav';

export default class peoplepolitek extends Component {
  render() {
    const title = `
    Politiek en samenleving waarin de mens eerst staat. 
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
            Als een slimme CEO zijn bedrijfsvoering bedenkt zal hij altijd een
            omgeving proberen te cre&euml;ren waarin mensen elkaar kunnen
            vertrouwen. Dit kan lastig zijn. Bedrijven hebben namelijk altijd te
            maken met dreiging van buiten, bijvoorbeeld van concurrentie. Dit
            kan ertoe leiden dat de CEO juist te veel nadruk gaat leggen op het
            behalen van goede bedrijfsresultaten, zonder bij de basis te
            beginnen van lange termijn succes, namelijk het vertrouwen tussen
            mensen. Zonder dit vertrouwen is het niet mogelijk een cultuur te
            cre&euml;ren waarin mensen naar elkaar toe trekken en samen gaan
            werken om het bedrijf innovatiever en sterker te maken. Alle
            succesvolle bedrijven zoals Apple onder Steve Jobs en Microsoft
            onder Bill Gates konden stabiel en innovatief blijven omdat er veel
            vertrouwen was onder de werknemers. Toch wordt Nederland niet op
            dezelfde manier gerund. We hebben een sociaal systeem wat ontzettend
            ineffici&euml;nt is en mensen continu wantrouwt. Daarnaast hebben
            veel mensen door stijgende armoede het vertrouwen in de politiek
            verloren.&nbsp;
          </p>
          <p>De politiek is vergeten de mens eerst te stellen.&nbsp;</p>
          <p>
            Als we echter voorwaarts willen gaan in Nederland is het zaak dat we
            een organisatie bouwen waarin de mens wel op een staat. Als de
            overheid zijnde is het namelijk zaak dat we onze mensen beschermen
            tegen de dreiging van buiten, zoals automatisering. Pas dan kunnen
            we erop vertrouwen dat de mensen ons land willen beschermen en zich
            vol inzetten voor ons gezamenlijk doel, namelijk een mooier
            Nederland. Als het met de mensen goed gaat komen de andere
            resultaten vanzelf, met een sterkere economie en samenleving als
            gevolg. Elke CEO weet dit, nu wij nog;&nbsp;
          </p>
          <p>Wij willen dit met deze maatregelen doen:</p>
          <ul>
            <li>
              <strong>Vrijheidsdividend</strong> van 1.000 euro per maand die
              het vertrouwen tussen mensen en in onze instituties zal vergroten
            </li>
            <li>
              <strong>Menselijk bbp</strong> waarin we niet de cijfers op 1
              stellen, maar menselijke factoren meenemen zoals onze
              levensverwachting en fysieke gezondheid.&nbsp;
            </li>
            <li>
              <strong>Versimpeling van belasting en sociale stelse</strong>l met
              als gevolg minder bureaucratie en meer vertrouwen in mensen door{' '}
              <strong>minder controles</strong>.&nbsp;
            </li>
          </ul>
        </PolicyTemplate>
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
