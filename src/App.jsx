import React from 'react';
import Navbar from './componets/navbar/Navbar';
import Hero from './componets/hero/Hero';
import Programs from './componets/programs/programs';
import Title from './componets/title/Title';
import About from './componets/about/About';
const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <div className='container'>
                <Title subTitle='OUR PROGRAM' title= 'What we Offer'/>
            <Programs/>
            </div>
            <About/>
            <Title subTitle='Gallery' title= 'Campus Photos'/>

        </div>
    )
}

export default App; 