import './Contact.css';
import enigma from '../../assets/images/encryption.jpg';

export default function Contact() {
  return (
    <section id="contact" className="contact-grid">
        <img src={enigma} alt="Enigma" className="project-img" />
        <div className='contact'>
          <div className="contact-title-box">
            <h2><u><i><b>Contact Me</b></i></u></h2>
            <p>Use the form below or visit the <a href="alec.html" className="btn" style={{ color: 'blue' }}>Capabilities</a> page for more.</p>
          </div>
        
          <form action="https://formspree.io/f/mnqoebvk" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <select name="guest" required>
              <option disabled selected>I am***</option>
              <option value="1">a Professor</option>
              <option value="2">an Employer</option>
              <option value="3">a Manager</option>
              <option value="4">your Friend</option>
              <option value="5">a Programmer</option>
              <option value="6">your Teacher</option>
              <option value="7">your Employee</option>
            </select>
            <select name="event" required>
              <option disabled selected>I want to***</option>
              <option value="1">ask you questions</option>
              <option value="2">Employ You</option>
              <option value="3">Work with you</option>
              <option value="4">Know you more</option>
              <option value="5">Get help from you</option>
              <option value="6">Connect with you</option>
              <option value="7">Report</option>
            </select>
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          </div>
    </section>
  );
}
