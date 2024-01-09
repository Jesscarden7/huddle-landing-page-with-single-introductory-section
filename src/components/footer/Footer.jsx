import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.iconContainer}><FontAwesomeIcon icon={faFacebookF} className={styles.icons} /></div>
      <div className={styles.iconContainer}><FontAwesomeIcon icon={faTwitter} className={styles.icons} /></div>
      <div className={styles.iconContainer}><FontAwesomeIcon icon={faInstagram} className={styles.icons} /></div>
    </div>
  );
}

export default Footer;
