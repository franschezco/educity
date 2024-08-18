import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "21a496a2-de8d-489f-a29f-f4e04cfcddcf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" srcset="" /></h3>
        <p>
            Feel free to reach out through contact form or find our contact information below.
            Your feedback, questions and suggestions are important to us as we strive to provide exceptional service to our 
            university community.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" srcset="" />contact@frankoe.com</li>
            <li><img src={phone_icon} alt="" srcset="" />+44 7576531253</li>
            <li><img src={location_icon} alt="" srcset="" />77 Massachutes Ave,Cambridge,<br/> MA 01239, United States</li>
    
        </ul>

      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} >
            <label htmlFor="Your Name"></label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label htmlFor="Your Phone"></label>
            <input type="tel" name='phone' placeholder='Enter your mobile phone' required />
            <label htmlFor="Write your message"></label>
            <textarea type="text" name='message' rows='6' placeholder='Write your message' required />
      <button type="submit" className='btn dark-btn'>Send Message <img src={white_arrow} alt="" srcset="" /></button>
        </form>
        <span>{result}</span>

      </div>
    </div>
  )
}

export default Contact
