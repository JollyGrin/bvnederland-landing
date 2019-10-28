import React, { Component } from 'react';
import TheHead from '../components/TheHead';
import TheNav from '../components/TheNav';
import Hero from '../components/Hero';
import AboutBody from '../components/AboutBody';
import Footer from '../components/Footer';

export default class about extends Component {
  render() {
    return (
      <div className="bvPage">
        <TheHead />
        {/* <TheNav /> */}
        <Hero heroTab={' '} />
        <AboutBody />
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
