import SocialLink from "../components/SocialLink";
import PageLinks from "../components/PageLinks";
import { pageLinks, socialLinks } from "../utils/data";


const Footer = () => {
    return (
      <footer className="section footer">

        <PageLinks parentClass="footer-links" itemClass="footer-link" />
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return (
              <SocialLink key={link.id} {...link} itemClass="footer-icon" />
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    );
}

export default Footer;