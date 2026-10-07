'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({ name: '', contact: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact-layout">
      <div className="contact-panel">
        <p className="eyebrow">Contact Win Everest</p>
        <h1>Start a construction, project management, equipment, or trading enquiry.</h1>
        <dl>
          <div><dt>Phone</dt><dd>+95 95020323</dd></div>
          <div><dt>Office</dt><dd>No.01, Level 12, Tower B, Diamond Condo, Pyay Road, Kamayut Township, Yangon, Myanmar</dd></div>
          <div><dt>Business Hours</dt><dd>Monday to Saturday, 9:00 AM - 5:00 PM</dd></div>
        </dl>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone or Email
          <input
            type="text"
            name="contact"
            autoComplete="email"
            required
            value={formData.contact}
            onChange={handleChange}
          />
        </label>
        <label>
          Service
          <select name="service" required value={formData.service} onChange={handleChange}>
            <option value="">Select service</option>
            <option>Building Construction</option>
            <option>Civil Engineering</option>
            <option>Infrastructure Development</option>
            <option>Project Management</option>
            <option>Renovation & Remodeling</option>
            <option>Equipment Rental</option>
            <option>Trading Materials</option>
          </select>
        </label>
        <label>
          Project Details
          <textarea
            name="message"
            rows={6}
            required
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <button className="button primary" type="submit">Send Enquiry</button>
      </form>
    </section>
  );
}
