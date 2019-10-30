import React, { Component } from 'react';
import TheHead from '../components/TheHead';
import HomeNav from '../components/HomeNav';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import PlatformBody from '../components/PlatformBody';

export default class visie extends Component {
  render() {
    return (
      <div className="bvPage">
        <TheHead />
        <HomeNav />
        <Hero heroTab={'visie'} />
        <PlatformBody />
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
