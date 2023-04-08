import React, { useState } from 'react';

import Footer from '../components/Footer';

function ContactUs() {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [Subject, setSubject] = useState('');
  const [customerNote, setCustomerNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <title>Contact us</title>
      <div className="ContactDiv">
        <form onSubmit={handleSubmit} className="contact-us">
          <label htmlFor="customerName">
            NAME <em>&#x2a;</em>
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <label htmlFor="customerEmail">
            EMAIL <em>&#x2a;</em>
          </label>
          <input
            type="email"
            id="customerEmail"
            name="customerEmail"
            required
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
          />

          <label htmlFor="customerPhone">PHONE</label>
          <input
            type="tel"
            id="customerPhone"
            name="customerPhone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
          />

          <label htmlFor="Subject">SUBJECT</label>
          <input
            type="text"
            id="Subject"
            name="Subject"
            value={Subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <label htmlFor="customerNote">
            YOUR MESSAGE <em>&#x2a;</em>
          </label>
          <textarea
            rows="4"
            id="customerNote"
            name="customerNote"
            required
            value={customerNote}
            onChange={(e) => setCustomerNote(e.target.value)}
          />

          <h3 className="infotext">
            Please provide all the information about your issue you can.
          </h3>
          <button id="SubmitButton" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
