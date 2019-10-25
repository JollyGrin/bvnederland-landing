import React, { Component } from 'react';
import TheHead from '../../components/TheHead';
import Footer from '../../components/Footer';
import DividendBody from '../../components/DividendBody';
import PolicyHero from '../../components/PolicyHero';
import TheNav from '../../components/TheNav';

export default class dividend extends Component {
  render() {
    const title = `
    Vrijheidsdividend
    `;

    const subtitle = `
    Wat is het vrijheidsdividend?
    `;

    const content = `
    lorem ipsum lorem ipsum lorem ipsumlorem ipsum
    lorem ipsum
    lorem ipsum
    lorem ipsum
    lorem ipsum
    `;
    return (
      <div className="bvPage">
        <TheHead />
        <TheNav />
        <PolicyHero title={title} subtitle={subtitle} />
        <DividendBody />
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
