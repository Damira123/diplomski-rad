import React, { useState } from 'react'
import "../stays/Home.css"
import Header from '../components/Header'
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import NewCollections from '../components/NewCollections/NewCollections';



function Home() {

  return (
    <div className='Home'>
        <Header/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        
      
    </div>
  )
}

export default Home