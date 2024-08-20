import React, { useRef, useEffect } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
    const slider = useRef(null);
    let tx = 0;

    useEffect(() => {
        const slides = slider.current.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            if (index === 0) slide.classList.add('active');
        });
    }, []);

    const slideForward = () => {
        const slides = slider.current.querySelectorAll('.slide');
        slides.forEach(slide => slide.classList.remove('active'));

        if (tx > -75) { // Adjusted for four slides
            tx -= 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
        slides[-tx / 25].classList.add('active');
    };

    const slideBackward = () => {
        const slides = slider.current.querySelectorAll('.slide');
        slides.forEach(slide => slide.classList.remove('active'));

        if (tx < 0) {
            tx += 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`;
        slides[-tx / 25].classList.add('active');
    };

    return (
        <div className='testimonial'>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_1} alt="William Jackson" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_2} alt="Sarah Connor" />
                                <div>
                                    <h3>Sarah Connor</h3>
                                    <span>TechEd, UK</span>
                                </div>
                            </div>
                            <p>The learning environment at TechEd is unparalleled. The faculty and resources provided have allowed me to grow both academically and personally.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_3} alt="Michael Smith" />
                                <div>
                                    <h3>Michael Smith</h3>
                                    <span>EduCorp, Australia</span>
                                </div>
                            </div>
                            <p>EduCorp has provided me with endless opportunities to advance my career in education. The hands-on experience and mentorship have been invaluable.</p>
                        </div>
                    </li>
                    <li>
                        <div className='slide'>
                            <div className="user-info">
                                <img src={user_4} alt="Laura Williams" />
                                <div>
                                    <h3>Laura Williams</h3>
                                    <span>EduNet, Canada</span>
                                </div>
                            </div>
                            <p>At EduNet, I found a place where my passion for teaching was nurtured and my skills were honed. It's a place that encourages innovation and creativity.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
