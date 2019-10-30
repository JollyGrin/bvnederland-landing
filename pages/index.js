import React, { Component } from 'react';
import TheHead from '../components/TheHead';
import HomeNav from '../components/HomeNav';
import Hero from '../components/Hero';
import HomeBody from '../components/HomeBody';
import Footer from '../components/Footer';

export default class index extends Component {
  render() {
    return (
      <div className="bvPage">
        <TheHead />
        <HomeNav />
        <Hero heroTab={'home'} />
        <HomeBody />
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
