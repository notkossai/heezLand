
import './support.css';

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useCoin } from '../../../../contexts/coins/CoinContext';

const SUPPORT_OPTIONS = [
  {
    id: 1,
    title: 'Email Support',
    icon: '📧',
    description: 'Send us an email and we\'ll respond within 24 hours',
    contact: 'support@heezland.com',
    link: 'mailto:support@heezland.com',
  },
  {
    id: 2,
    title: 'Live Chat',
    icon: '💬',
    description: 'Chat with our team during business hours',
    contact: 'Available 9AM-5PM',
    link: null,
  },
  {
    id: 3,
    title: 'FAQ Section',
    icon: '❓',
    description: 'Find instant answers to common questions',
    contact: 'Browse FAQs',
    link: '/faq',
  },
  {
    id: 4,
    title: 'Community Forum',
    icon: '👥',
    description: 'Ask and help other Heez Land members',
    contact: 'Join Forum',
    link: null,
  }
];

export default function SupportPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isOnCoolDown, setIsOnCooldown] = useState(false);
  const { earnCoins } = useCoin();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message && !isOnCoolDown) {
      setSubmitted(true);
      setIsOnCooldown(true);
      earnCoins(20, 'Submitted support request');
      setFormData({ name: '', email: '', message: '' });

      // Disable button for 5 mins
      setTimeout(() => {
        setSubmitted(false);
        setIsOnCooldown(false);
      }, 300000);  // 5 mins cooldown
    }
  };


  return (
    <main className="support-page">
      <h1>🆘 Support Center</h1>
      <p>Need help? We're here to assist you!</p>

      <div className="support-container">
        <div className="support-options">
          {SUPPORT_OPTIONS.map(option => (
            <div key={option.id} className="support-option">
              <div className="support-option__icon">{option.icon}</div>
              <h3 className="support-option__title">{option.title}</h3>
              <p className="support-option__description">{option.description}</p>
              <button
                className="support-option__button"
                onClick={() => {
                  if (option.link) {
                    if (option.link.startsWith('mailto:')) {
                      window.location.href = option.link;
                    } else {
                      navigate(option.link);
                    }
                  }
                }}
              >
                {option.contact}
              </button>
            </div>
          ))}
        </div>

        <div className="support-form-section">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="support-form__group">
              <label className="support-form__label">
                Name
                <span className='contact-form__required'>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="support-form__input"
                placeholder="Your name"
                required
              />
            </div>

            <div className="support-form__group">
              <label className="support-form__label">
                Email
                <span className='contact-form__required'>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="support-form__input"
                placeholder="Your email"
                required
              />
            </div>

            <div className="support-form__group">
              <label className="support-form__label">
                Message
                <span className='contact-form__required'>*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="support-form__textarea"
                placeholder="How can we help?"
                required
              ></textarea>
            </div>

            <button type="submit" className="support-form__submit" disabled={isOnCoolDown}>
              {isOnCoolDown ? 'sent ✓' : 'Send Message 📤'}
            </button>

            {submitted && (
              <div className="support-response success">
                ✓ Thank you! We'll get back to you soon. +20 coins! 🪙
              </div>
            )}

            {isOnCoolDown && !submitted &&(
              <div className="support-response error">
                ⏳ Too many requests, you need to wait 5 minutes to send another message.
              </div>
              /* TO DO */
            )}
          </form>
        </div>
      </div>
    </main>
  );
}