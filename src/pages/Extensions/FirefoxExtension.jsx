import React from "react";
import styles from "./Extension.module.css";
import { Link } from "react-router-dom";

export default function FirefoxExtension() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div>
          <h1>Firefox Extension</h1>
          <p>
            Add our Firefox extension to your browser for fast access to the
            toolbox and offline-friendly features.
          </p>
          <div className={styles.buttons}>
            <a className={styles.btn} href="#">Add to Firefox</a>
            <Link className={`${styles.btn} ${styles.secondary}`} to="#">
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div>
          <h3>Features</h3>
          <ul className={styles.featureList}>
            <li>Toolbar access to favorite tools</li>
            <li>Works with private browsing mode</li>
            <li>Minimal permissions required</li>
          </ul>
        </div>

        <div className={styles.screenshot}>Firefox Extension Preview</div>
      </div>
    </div>
  );
}
