import logo from '../../images/LandingPageImages/logo-on-light.svg'
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import styles from './Footer.module.css'    

function Bottombar() {
  return (
    <div className={styles.bottombar}>
      <Link to="/">   <img className={styles.logo} src={logo} alt="logo" /></Link>
   

      <div className={styles.linkscntainer}>
        <Link className={styles.link} to="/about">About</Link>
        <Link className={styles.link} to="/termsofuse">Terms Of Use</Link>
        <Link className={styles.link} to="/contact">Contact</Link>
        <Link className={styles.link} to="/privicyandpolicy">Privacy & Policy</Link>
      </div>

      <p className={styles.text}>
        Made with 
        <FaHeart className={styles.heart} />
        in Earth
      </p>
    </div>
  );
}

export default Bottombar;