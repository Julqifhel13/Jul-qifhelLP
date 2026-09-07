import Icon from './Icon.jsx';
import { footer, profile } from '../data/site.js';
import './Footer.css';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#top" className="footer__mark" aria-label={`${profile.name} — back to top`}>
              <span className="footer__initials">{profile.initials}</span>
              <span className="footer__name">{profile.name}</span>
            </a>
            <p className="footer__blurb">{footer.blurb}</p>

            <ul className="footer__socials">
              {profile.socials.map((social) => {
                const external = social.href.startsWith('http');
                return (
                  <li key={social.label}>
                    <a
                      className="btn btn--icon"
                      href={social.href}
                      aria-label={social.label}
                      rel={external ? 'noopener noreferrer' : undefined}
                      target={external ? '_blank' : undefined}
                    >
                      <Icon name={social.icon} size={17} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {footer.columns.map((col) => (
            <nav className="footer__col" aria-label={col.title} key={col.title}>
              <h2 className="footer__col-title">{col.title}</h2>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? (
                      <a className="footer__link" href={link.href}>
                        {link.label}
                      </a>
                    ) : (
                      <span className="footer__link footer__link--static">{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <hr className="rule footer__rule" />

        <div className="footer__bottom">
          <p className="footer__legal">
            © {year} {profile.name}. {footer.legal}
          </p>
          <div className="footer__bottom-right">
            <span className="tag">{footer.builtWith}</span>
            <a className="footer__top" href="#top">
              Back to top
              <Icon name="arrowUp" size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
