import React, { Component } from 'react';
import TheHead from '../components/TheHead';
import HomeNav from '../components/HomeNav';
import Hero from '../components/Hero';
import JoinBody from '../components/JoinBody';
import Footer from '../components/Footer';

export default class join extends Component {
  active = 'join';
  render() {
    return (
      <div className="bvPage">
        <TheHead />
        <HomeNav />
        <Hero heroTab={'join'} />
        <JoinBody />
        <Footer />

        <style jsx>{``}</style>
      </div>
    );
  }
}
