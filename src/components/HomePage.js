import React from 'react';

// components
import Header from './Header';
import Room from '../containers/Room';
import Jobs from '../containers/Jobs';
import Forum from './Forum';
import Footer from './Footer';

function HomePage() {
    return (
      <div className="">
        <Header/>
        <Room/>
        <Jobs/>
        <Forum/>
        <Footer/>
      </div>
    );
}

export default HomePage;


