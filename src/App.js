import logo from './logo.svg';
import '@trussworks/react-uswds/lib/uswds.css'
import '@trussworks/react-uswds/lib/index.css'
import { GovBanner, Card, Footer, FooterNav, Logo, SocialLinks, Address } from '@trussworks/react-uswds'

function App() {
  return (
    <>
      <GovBanner />
      <Card />
      <Footer 
        size="medium"
        primary={
          <FooterNav
          className="bg-red"
          size="medium"
          links={[<a className="usa-footer__primary-link" href="#">Documentation</a>, <a className="usa-footer__primary-link" href="#">Features</a>, <a className="usa-footer__primary-link" href="#">Gettings Started</a>, <a className="usa-footer__primary-link" href="#">About Us</a>, <a className="usa-footer__primary-link" href="#">Privacy Policy</a>]}
          />
        }
        secondary={
          <div className="grid-row grid-gap">
            <Logo
              size="medium"
              image={
                <img
                  className="usa-footer__logo-img"
                  alt="img alt text"
                  src={"https://picsum.photos/id/237/200/300"}
                />
              }
              heading={<p className="usa-footer__logo-heading">Name of Agency</p>}
            />
            <div className="usa-footer__contact-links mobile-lg:grid-col-6">
              <SocialLinks links={[<a className="usa-footer__primary-link" href="#">asdf</a>]} />
              <h3 className="usa-footer__contact-heading">Agency Contact Center</h3>
              <Address
                size="medium"
                items={[
                  <a key="telephone" href="tel:1-800-555-5555">
                    (800) CALL-GOVT
                  </a>,
                  <a key="email" href="mailto:info@agency.gov">
                    info@agency.gov
                  </a>,
                ]}
              />
            </div>
          </div>
        }
      />
    </>
  );
}

export default App;
