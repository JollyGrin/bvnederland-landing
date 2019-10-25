import React, { Component, Fragment } from 'react';
import TheHead from '../../components/TheHead';
import Footer from '../../components/Footer';
import PolicyTemplate from '../../components/PolicyTemplate';
import PolicyHero from '../../components/PolicyHero';
import TheNav from '../../components/TheNav';

export default class immigratie extends Component {
  render() {
    const title = `
            Immigratie
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
            Immigratie is iets wat veel mensen in de politiek en in onze
            samenleving in haar greep houdt. Sinds de migratiecrises in 2015
            hebben veel westerse landen te maken gekregen met de uitdagingen die
            een dusdanig grote migratiestroom met zich meebrengen. Het heeft ook
            veel demografische angst veroorzaakt in deze landen, ook in
            Nederland. Dit is logisch. In alle plekken, zelfs in Californie ten
            tijde van haar grote immigratiegolven in de jaren 90, zien we dat
            wanneer er een relatief grote demografische verandering optreedt,
            mensen hier sterk op reageren. Mensen kennen deze migranten niet en
            ze vragen zich af wat dit betekent voor hun gemeenschap of land.
            Naast deze demografische angst leven veel namelijk ook in
            economische angst omdat ze niet het gevoel hebben perspectief te
            hebben op een betere toekomst. De economische koek die we met
            z&rsquo;n allen in dit land delen wordt steeds kleiner en dit zorgt
            er onder andere voor dat we de impact van immigranten overschatten.
            Veel politici zeggen dat immigranten onze banen inpikken, terwijl in
            werkelijkheid technologie en globalisering dit doen. Ze maken
            gebruik van onze angst en dit zien we in de cijfers.&nbsp;
          </p>
          <p>
            Zo dachten Nederlanders in 2018 dat een kwart van de inwoners uit
            immigranten bestond, terwijl dit in werkelijkheid maar 12% was. Ook
            dachten we dat 20% van de bevolking moslim was, terwijl dit in
            werkelijkheid maar 5% is.&nbsp;
          </p>
          <p>
            Ook dit is logisch, echter moeten we in combinatie met goed
            migratiebeleid beter gaan kijken naar de echte problemen van onze
            tijd, namelijk de dreiging die technologie voor ons vormt. Juist
            omdat we als Nederlanders niet profiteren van de collectief
            gecre&euml;erde welvaart die technologie voortbrengt hebben we het
            gevoel dat we de economische koek moeten verdedigen tegen
            immigranten. We denken in een mindset van schaarste die zegt dat de
            winst van de immigrant jou verlies is. Dit is echter niet zo. Samen
            met het vrijheidsdividend van 1.000 euro per maand die wij als
            aandeelhouders van de BV Nederland moeten krijgen moeten we naar een
            mindset van overvloed gaan waarin wij samen met diverse migranten
            dit land mooier gaan maken. Uit onderzoek blijkt namelijk verder ook
            dat hoe meer we in contact komen met migranten, hoe beter we ook
            tegenover hen staan.&nbsp;
          </p>
          <p>
            Als beweging staan wij voor voorwaarts migratiebeleid die migranten
            de kans geeft op een bestaan in Nederland. Een Nederland waarin wij
            de innovatie en ondernemerschap omarmen die immigranten vaak
            cre&euml;ren. Een Nederland waarin wij allemaal profiteren van de
            welvaart van de 21-eeuwse economie.&nbsp;
          </p>
          <p>Wij willen:&nbsp;</p>

          <ul>
            <li>
              Alle immigranten die nu in ons land zijn een{' '}
              <strong>weg naar burgerschap</strong> bieden.&nbsp;
            </li>
            <li>
              Nieuw immigratiemodel die immigratie op een gezond tempo laat
              ontstaan, zodat de integratiemogelijkheden voor{' '}
              <strong>toekomstige Nederlanders </strong>groter zijn. Voor hen
              goed en voor Nederland goed.&nbsp;
            </li>
            <li>
              <strong>Vrijheidsdividend</strong> van 1.000 euro per maand om
              economische angst van mensen te verminderen en hen hierdoor ook
              meer open te laten staan immigranten in hun buurt en de dingen die
              we van elkaar kunnen leren.&nbsp;
            </li>
          </ul>
          <p>
            <em>Blz 174 175 176 177 mounk</em>
          </p>
        </PolicyTemplate>
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
