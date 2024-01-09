import styles from "./Header.module.css";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} />
    </div>
  );
}

export default Header;
