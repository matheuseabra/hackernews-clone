import React, { Component } from 'react'
import '../../styles/HomeLayout.css'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class HomeLayout extends Component {
  render() {
    return (
      <div className="HomeLayout">
        <Header title={'This title rocks man'} description={'and this description too.'}/>
        <Footer />
      </div>
    );
  }
}

export default HomeLayout;

