import Icon from './Icon.jsx';
import { contact, profile } from '../data/site.js';
import './Contact.css';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="glow glow--primary contact__glow" />

      <div className="container contact">
        <div className="contact__copy" data-reveal>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h2 className="t-h2 contact__title">
            {contact.heading.map((line) => (
              <span className="contact__line" key={line}>
                {line}
              </span>
            ))}
          </h2>
          <p className="t-lead contact__body">{contact.body}</p>

          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={16} />
              Send an Email
            </a>
            {profile.resumeUrl && (
              <a className="btn btn--ghost" href={profile.resumeUrl} download>
                <Icon name="download" size={16} />
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="contact__panel" data-reveal data-reveal-delay="100">
          <ul className="contact__methods">
            {contact.methods.map((method) => (
              <li key={method.label}>
                {method.href ? (
                  <a className="contact__row card card--hover" href={method.href}>
                    <span className="icon-tile icon-tile--secondary">
                      <Icon name={method.icon} size={17} />
                    </span>
                    <span className="contact__text">
                      <span className="contact__label">{method.label}</span>
                      <span className="contact__value">{method.value}</span>
                    </span>
                    <Icon name="arrow" size={16} className="contact__arrow" />
                  </a>
                ) : (
                  <div className="contact__row card">
                    <span className="icon-tile icon-tile--secondary">
                      <Icon name={method.icon} size={17} />
                    </span>
                    <span className="contact__text">
                      <span className="contact__label">{method.label}</span>
                      <span className="contact__value">{method.value}</span>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="contact__availability">
            <p className="contact__availability-title">
              <span className="dot dot--pulse" />
              {contact.availability.title}
            </p>
            <p className="contact__availability-body">{contact.availability.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
