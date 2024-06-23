import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import ServiceItem from './subcomponents/ServiceItem/ServiceItem';
import TeamMemberItem from './subcomponents/TeamMemberItem/TeamMemberItem';

// the store from 'store.js' holds all of the data for this website 
import store from '../../assets/store';

export default function HomePage() {
  return (
    <div id='home-page-container'>
      <main id='hero-section'>
        <h1>Loma Construction</h1>
        <p>We're a licensed GC company dedicated to helping you with all of your home renovation needs.</p>
        <Link to='/services' id='hero-cta' className='button-animation'>Learn more</Link>
      </main>
      <section id='meet-the-team-section'>
        <h2>Meet the Team!</h2>
				<div id='team-member-cards'>
					{store.teamMembers.map(member => {
						return <TeamMemberItem name={member.name} title={member.title} biography={member.biography} />
					})}
				</div>
      </section>
      <section id='services-section'>
        <h2>What do we do?</h2>
        {store.services.map(service => {
          return <ServiceItem title={service.title} description={service.shortDesc} />
        })}
      </section>
      <section id='contact-form-section'>
        <h2>Need an estimate?</h2>
        <p>Get in contact with us for a free quote!</p>
        <form>
          <label for='full-name'>Your Name</label>
          <input type='text' id='full-name' name='full-name' required />
          <label for='email'>Email</label>
          <input type='email' id='email' name='email' required />
          <label for='phone-number'>Phone Number</label>
          <input type='tel' id='phone-number' name='phone-number' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
          <label for='form-message'>Your Message</label>
          <textarea id='form-message' name='form-message' >Type your message here...</textarea>
          <input type='submit'></input>
        </form>
      </section>
    </div>
  )
};