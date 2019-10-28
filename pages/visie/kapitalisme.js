import React, { Component, Fragment } from 'react';
import TheHead from '../../components/TheHead';
import Footer from '../../components/Footer';
import PolicyTemplate from '../../components/PolicyTemplate';
import PolicyHero from '../../components/PolicyHero';
import TheNav from '../../components/TheNav';

export default class kapitalisme extends Component {
  render() {
    const title = `
    Kapitalisme waarin de mens op één staat.
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
            Het kapitalisme heeft rond de jaren 80 een flauwe bocht genomen.
            Vroeger heerste er bij grote bedrijven een sterke cultuur waarin
            mensen zich veilig voelde. Ook verdiende de CEO&rsquo;s nooit 300
            keer zoveel als de gemiddelde werknemer. CEO&rsquo;s waren leiders
            die zich verantwoordelijk voelde voor de mensen die zij diende.
            Zonder een omgeving van vertrouwen, dachten vele CEO&rsquo;s, kon
            het bedrijf op de langere termijn niet goed presteren.
          </p>
          <p>
            &nbsp;Een omgeving van onveiligheid waarin een ontslag zo om de hoek
            kon liggen zou namelijk op de korte termijn misschien resultaten
            opleveren, maar kon op de lange termijn stagnerend werken op de
            prestaties van werknemers en hun onderlinge samenwerking. Bedrijven
            voelden zich indirect dus ook verantwoordelijk voor de landen waarin
            ze opereerden door mensen niet alleen goed te betalen, maar
            daarnaast ook belasting af te dragen.&nbsp;
          </p>
          <p>
            Echter keerde het tij in de jaren 80 onder invloed hoge inflatie en
            meer onzekere tijden voor bedrijven. En zoals wij mensen altijd doen
            in onzekere tijden gingen deze bedrijven op zoek naar oplossingen
            voor hun probleem. En deze oplossing kregen ze onder andere in de
            vorm van Milton Friedman, die rond deze tijd het begrip{' '}
            <em>Maximizing shareholder value </em>&nbsp;introduceerde, oftewel
            het maximaliseren van de opbrengst voor de aandeelhouders.&nbsp;
          </p>
          <p>
            Dit moest gedaan worden door niet alleen de bonussen van CEO&rsquo;s
            te koppelen aan de koersprijzen van bedrijven, maar ook door zoveel
            mogelijk te bezuinigingen binnen het bedrijf opdat er vervolgens
            meer winst gemaakt kon worden. Hierdoor werden de CEO&rsquo;s opeens
            niet meer verantwoordelijk voor hun werknemers, maar voor de
            aandeelhouders. Hierdoor werden de aandeelhouders op een gezet, maar
            werden de mensen die in het bedrijf werkten een abstract cijfertje
            op een vel papier. Iets wat abstract is, valt echter moeilijk mee te
            sympathiseren. Dit had als gevolg niet alleen exorbitante salarissen
            voor CEO&rsquo;s, maar ook een golf van ontslagrondes wanneer
            bepaalde winstdoelen behaald moesten worden. Met de moeder met drie
            kinderen die hierdoor geen baan meer had kon geen rekening gehouden
            worden. Ze was een cijfer op een balans. Ze stond niet op 1.
          </p>
          <p>
            Het wordt dus hoog tijd om dit te veranderen en bedrijven te
            stimuleren mensen op een te zetten, in plaats van mensen als cijfers
            te zien. Dit heeft niet alleen als gevolg aantoonbaar betere
            resultaten voor bedrijven omdat ze hierdoor een meer veilige
            omgeving voor hun medewerkers cre&euml;ren om in te innoveren en
            samenwerken, maar ook een betere verstandhouding en samenwerking met
            de maatschappij. Het gevoel dat we momenteel namelijk hebben dat het
            huidige kapitalisme niet strookt met onze waarden klopt. Laat je
            niet door mensen vertellen dat je het mis hebt omdat je &lsquo;niks
            weet&rsquo; over zakendoen. Het is namelijk niet normaal dat we ons
            niet meer veilig voelen op het werk omdat een ontslagronde zou om de
            hoek kan komen kijken. Of dat we ondanks ons harde werken al jaren
            zien dat de lonen dalen in ons land.&nbsp;
          </p>
          <p>
            &nbsp;Toch was het kapitalisme vroeger dus niet zo. Het is gekaapt.
            Echter zien we steeds meer bedrijven terugkeren naar de tijd voor
            deze kaping, door eindelijk weer de mensen te dienen.&nbsp;
          </p>
          <p>
            Nu alleen nog een kapitalisme waarin de mensen op een staan.&nbsp;
          </p>
          <p>Wij willen:</p>
          <ul>
            <li>
              Belastingvoordelen geven aan bedrijven die werknemers{' '}
              <strong>mede-eigenaar </strong>maken. Dit zorgt voor betere lonen
              voor onze mensen en meer innovatieve werknemers voor de bedrijven.
              De werknemers hebben namelijk baat bij de groei van de familie die
              het bedrijf vanaf dat moment vormt.&nbsp;
            </li>
            <li>
              Een <strong>menselijk bbp</strong> introduceren met andere
              factoren dan enkel economische groei. Op basis van dit bbp zullen
              we dan markten stimuleren onze gemeenschappelijke waarden en
              doelen te bereiken, zoals een goede gezondheid van onze werknemers
              of goede banen.&nbsp;
            </li>
            <li>
              Bedrijven meer gaan belasten zodat we de welvaart van Nederland
              waar ook zij van profiteren{' '}
              <strong>in stand kunnen houden.</strong>
            </li>
            <li>
              Vrijheidsdividend van 1.000 euro per maand die werknemers ten
              eerste meer onderhandelingsmacht geeft en ten tweede de
              mogelijkheid werk te gaan doen waar ze veel meer geluk en
              waardigheid uit kunnen halen, met meer groei als economie en
              samenleving als gevolg.&nbsp;
            </li>
          </ul>
        </PolicyTemplate>
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
