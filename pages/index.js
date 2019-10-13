import React, { Component } from 'react';
import TheHead from '../components/TheHead';
import TheNav from '../components/TheNav';
import Hero from '../components/Hero';
import HomeBody from '../components/HomeBody';
import Footer from '../components/Footer';

export default class index extends Component {
  render() {
    return (
      <div className="bvPage">
        <TheHead />
        {/* <TheNav /> */}
        <Hero heroTab={'home'} />
        <HomeBody />
        <Footer />

        <style jsx>{`
          .bvPage {
            background: url('static/media/nl.png');
            background-size: cover;
            background-position: right top;
          }
        `}</style>
      </div>
    );
  }
}
