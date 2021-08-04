import React from 'react';
import Contact from './Contact';
import Services from './Services';
import Prices  from './Prices';
import Form from './Form';

const Home = () => {
    return (
        <> 
              <Services/>
              <Prices/> 
              <Form/> 
              <Contact/>            
        </>
    )
}

export default Home;
