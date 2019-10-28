import React, { Component, Fragment } from 'react';
import TheHead from '../../components/TheHead';
import Footer from '../../components/Footer';
import PolicyTemplate from '../../components/PolicyTemplate';
import PolicyHero from '../../components/PolicyHero';
import TheNav from '../../components/TheNav';

export default class mindset extends Component {
  render() {
    const title = `
    Naar mindset van overvloed
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
            Volgens Abraham Maslow werken mensen volgens een hi&euml;rarchie van
            behoeften. Op de meest basale manier verlangen we naar de goederen
            die essentieel zijn voor onze overleving, inclusief voedsel,
            onderdak en veiligheid tegen fysieke aanvallen. Wanneer aan deze
            basisbehoeften wordt voldaan, besteden we steeds meer tijd aan
            andere verlangens, zoals liefde en gemeenschap. We doen kortom aan
            zelfrealisering.
          </p>
          <p>
            Wanneer iedereen profiteert van economische groei kunnen we allemaal
            aan zelfrealisering doen. We zitten in deze staat continu in een
            mindset van overvloed die ons gelukkiger maakt en ook meer open laat
            staan voor samenwerking in ons land.&nbsp;
          </p>
          <p>
            Naarmate steeds meer mensen in ons land echter economische angst
            zijn gaan voelen en onder armoede zijn gaan lijden, zijn we echter
            langzaam in ons politieke en maatschappelijke debat in een mindset
            van schaarste terechtgekomen. Dit is logisch, omdat we als mensen
            het gevoel zijn gaan krijgen dat er steeds minder economische groei
            te verdelen is, met als gevolg een gevecht om de overgebleven
            economische baten.&nbsp;
          </p>
          <p>
            Deze mindset maakt ons echter minder rationeel en meer emotioneel
            gedreven. Minder gecontroleerd en meer impulsief. We ontwikkelen
            namelijk een overlevingsdrang die ons vertelt dat er niet genoeg
            voor iedereen is, en dat als iemand het bijvoorbeeld niet eens is
            met jou, hij of zij een gevaar is. Met als gevolg meer verharde
            politieke en maatschappelijke debatten. Dit is echter niet zo. In
            ons land is er genoeg voor iedereen. We zijn een van de rijkste
            landen ter wereld. Het probleem is echter dat de welvaart die we
            samen hebben gecre&euml;erd niet meer bij ons terechtkomt, maar
            bijvoorbeeld bij de grote tech-bedrijven van onze wereld.&nbsp;
          </p>
          <p>
            Dit moet anders. Iedereen in ons land zou de mogelijkheid tot
            zelf-realisatie moeten hebben, om risico&rsquo;s te kunnen nemen
            voor de vooruitgang van Nederland, wetende dat wij voor ze klaar
            staan als het misgaat.&nbsp;
          </p>
          <p>
            Iedereen moet weer blij voor elkaar kunnen zijn als de ander
            vooruitgang boekt. Juist omdat we weten dat wij deze mogelijkheden
            ook hebben en onze eigen weg bewandelen. Of dit nu een geboren
            Nederlander is, of iemand die samen met ons Nederland sterker gaat
            maken. Sterker met een mindset van overvloed.&nbsp;
          </p>
          <p>Wij willen:</p>
          <ul>
            <li>
              Een vrijheidsdividend invoeren van 1.000 euro per maand zodat
              iedereen de vruchten kan plukken van onze rijkdom.
            </li>
            <li>
              De prestaties van Nederlanders elk jaar eren op een ceremonie in
              Den Haag.&nbsp;
            </li>
            <li>Geen enkele Nederlander in economische angst laten leven</li>
          </ul>
        </PolicyTemplate>
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
