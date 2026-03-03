import React from "react";
import styles from "./Extension.module.css";
import { Link } from "react-router-dom";

export default function ChromeExtension() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div>
          <h1>Chrome Extension</h1>
          <p>
            Install our Chrome extension to access all tools in one click from
            your browser toolbar.
          </p>
          <div className={styles.buttons}>
            <a className={styles.btn} href="#">Add to Chrome</a>
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
            <li>Quick access to tools from the toolbar</li>
            <li>Save favorites for instant use</li>
            <li>Lightweight and privacy-first</li>
          </ul>
        </div>

        <div className={styles.screenshot}>Chrome Extension Preview</div>
      </div>
    </div>
  );
}
