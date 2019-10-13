import React, { Component } from 'react';
import TheHead from '../components/TheHead';
import TheNav from '../components/TheNav';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import PlatformBody from '../components/PlatformBody';

export default class platform extends Component {
  render() {
    return (
      <div className="bvPage">
        <TheHead />
        {/* <TheNav /> */}
        <Hero heroTab={'platform'} />
        <PlatformBody />
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
