import React from "react";
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import styles from "./styles.module.css";
import Translate from '@docusaurus/Translate';

export default function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <ThemedImage
            className={styles.logo}
            alt="My Smart Notes logo"
            sources={{
              light: useBaseUrl("images/logo.svg"),
              dark: useBaseUrl("images/logo.svg"),
            }}
          />
        </div>
        <div className={styles.right}>
          <h1 className="title">My Smart Notes</h1>
          <p >
            <Translate>Quick Reference Portal for Software Engineers!</Translate>
          </p>
          <p >
            <Translate>Everything you need - all straight to the point!!</Translate>
          </p>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/voice-over-internet-protocol">
              <Translate>Start Reading →</Translate>
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/cheatsheet/rest-api">
              <Translate>Cheat Sheets</Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}