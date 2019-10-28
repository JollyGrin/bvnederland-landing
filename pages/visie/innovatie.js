import React, { Component, Fragment } from 'react';
import TheHead from '../../components/TheHead';
import Footer from '../../components/Footer';
import PolicyTemplate from '../../components/PolicyTemplate';
import PolicyHero from '../../components/PolicyHero';
import TheNav from '../../components/TheNav';

export default class innovatie extends Component {
  render() {
    const title = `
    21-eeuwse economie
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
            Onze economie groeit al tijden vrij goed. Echter wordt niet meer de
            vraag gesteld waar we als Nederland zijnde naar toe willen. Waar is
            deze groei voor bijvoorbeeld? Wat zijn onze doelen en ambities voor
            de toekomst? Hoe gaan we de uitdagingen en kansen van kunstmatige
            intelligentie omarmen?&nbsp;
          </p>
          <p>
            Daarnaast is onze economie nooit helemaal bekomen van de economische
            crisis in 2008 door onder andere vele bezuinigingen in de publieke
            sector, stagnerende inkomens bij mensen en het instandhouden van een
            bureaucratisch systeem die met teveel regels de economische dynamiek
            en investeringen ontmoedigt.&nbsp;
          </p>
          <p>
            In tijden van crisis moeten we naar elkaar toe trekken als land en
            mensen juist een steun in de rug geven, opdat ze vervolgens mee
            kunnen helpen aan de wederopbouw van onze economie. Een groei
            waarvan iedereen profiteert. Dat is echter niet gebeurd na de
            crisis. Als beweging willen wij een nieuwe richting geven aan onze
            economie, onder andere met een nieuw voorwaarts bbp die eerst naar
            de gezondheid van onze mensen en samenleving kijkt, in plaats van
            enkel naar groei in cijfers. Als onze mensen en samenleving namelijk
            goed functioneert volgt de economie vanzelf.&nbsp;
          </p>
          <p>
            Het eerste wat we zullen doen is alle mensen in Nederland een fikse
            koopkrachtstijging geven met het vrijheidsdividend van 1.000 euro
            per maand. Dit geld zal door de economie blijven circuleren, met als
            gevolg niet alleen meer economische groei, maar ook meer
            ondernemerschap, innovatie en economische dynamiek. Bedrijven zullen
            weer mensen durven aannemen, jonge mensen zullen hun start-ups
            kunnen boosten en mensen in ons land kunnen meer risico&rsquo;s
            nemen door bedrijven op te starten. Ze hebben tenslotte 1.000 euro
            per maand. Als het misgaat staan wij voor ze klaar.&nbsp;
          </p>
          <p>
            Daarnaast is dit vrijheidsdividend belangrijk om onze economie voor
            te bereiden op de exponenti&euml;le ontwikkeling die kunstmatige
            intelligentie nu aan het doormaken is. Elke Nederlander die door
            deze ontwikkelingen zijn loon ziet dalen of zijn baan verliest moet
            niet alleen een financiele vloer hebben om op te staan, maar ook
            onderhandelingsmacht om &lsquo;nee&rsquo; te kunnen zeggen tegen een
            werkgever die hen niet goed behandelt. Dat is een Nederland waarin
            wij willen wonen. Een Nederland dat zich actief voorbereidt op de
            toekomst en mensen bestaanszekerheid geeft. Een Nederland die ook de
            kansen aanpakt die technologie biedt door tech-hubs zoals Eindhoven
            te laten groeien.&nbsp;
          </p>
          <p>Wij willen:</p>
          <ul>
            <li>
              <strong>Vrijheidsdividend</strong> van 1.000 euro per maand voor
              elke Nederlander om ondernemerschap te bevorderen,
              bestaanszekerheid voor mensen te garanderen en de economie aan te
              zwengelen. Ook zal het mensen juist stimuleren meer te werken
              omdat werken nu zal lonen.&nbsp;
            </li>
            <li>
              Voorwaarts <strong>bbp</strong> die menselijke waarden voor
              economische waarden stelt door ook onze levensverwachting, mentale
              gezondheid of het aantal uren vrijwilligerswerk mee te nemen.
            </li>
            <li>
              Meer <strong>investeringen</strong> in onze economie stimuleren.
              Er wordt nu veel te veel op de plank gehouden door grote bedrijven
              en fondsen. Dit doen ze onder andere omdat ze geen kansen zien.
              Wij zullen deze kansen bieden, in plaats van belastingverlagingen
              te geven die vaak geen substantieel effect hebben op het gedrag
              van bedrijven.&nbsp;
            </li>
            <li>
              Versimpeling belastingstelsel zodat werken weer gaat lonen. Ook
              willen we overbodige regulering weghalen zodat bedrijven mensen
              makkelijker kunnen aannemen.
            </li>
          </ul>
        </PolicyTemplate>
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
