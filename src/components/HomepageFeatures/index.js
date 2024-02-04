import React from 'react';
import clsx from 'clsx';
import styles from "./styles.module.css";
import Translate from '@docusaurus/Translate';
import ShortAndCrisp from '../images/shortandcrisp.svg';
import ToThePoint from '../images/tothepoint.svg';
import UpToDate from '../images/uptodate.svg';

const FeatureList = [
  {
    title: <Translate>Short and Crisp</Translate>,
    description: (
      <Translate>
        Uncover tech essentials with concise content and tutorials. Short, impactful, and laser-focused for your learning needs.
      </Translate>
    ),
    icon: <ShortAndCrisp className={ styles.icon } />
  },
  {
    title: <Translate>To the Point</Translate>,
    description: (
      <Translate>
        Navigate your software engineering journey effortlessly with straightforward content. No noise, just the precise insights. 
      </Translate>
    ),
    icon: <ToThePoint className={ styles.icon } />,
  },
  {
    title: <Translate>Up to Date</Translate>,
    description: (
      <Translate>
        Stay ahead with the latest insights and be equipped with the most current knowledge in the fast-paced world of technology.
      </Translate>
    ),
    icon: <UpToDate className={ styles.icon } />
  },
];

function Feature({ title, description, icon }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.feature, "text--center padding-horiz--md")}>
        { icon }
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
