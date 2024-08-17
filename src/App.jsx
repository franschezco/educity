import React from 'react';
import Navbar from './componets/navbar/Navbar';
import Hero from './componets/hero/Hero';
import Programs from './componets/programs/programs';
import Title from './componets/title/Title';
import About from './componets/about/About';
import Campus from './componets/campus/Campus';
import Testimonials from './componets/testimonials/Testimonials';
const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <div className='container'>
                <Title subTitle='OUR PROGRAM' title= 'What we Offer'/>
            <Programs/>
            
            <About/>
            <Title subTitle='Gallery' title= 'Campus Photos'/>
            <Campus/>
            </div>
            <Title subTitle='Testimonials' title= 'What Students Says'/>
            <div className='container'>
            <Testimonials/>
            <Title subTitle='Contact Us' title= 'Get In Touch'/>
            </div>


        </div>
    )
}

export default App; 