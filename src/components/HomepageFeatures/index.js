import React from 'react';
import clsx from 'clsx';
import styles from "./styles.module.css";
import Translate from '@docusaurus/Translate';
import ToThePoint from '../images/tothepoint.svg';
import StepByStep from '../images/stepbystep.svg';
import TechExperts from '../images/techexperts.svg';

const FeatureList = [
  {
    title: <Translate>To The Point!!</Translate>,
    description: (
      <Translate>
        Navigate through your software engineering journey effortlessly with our easy-to-follow notes, articles, and tutorials.
      </Translate>
    ),
    icon: <ToThePoint className={ styles.icon } />
  },
  {
    title: <Translate>Step by Step</Translate>,
    description: (
      <Translate>
        Master concepts and build projects confidently with our step-by-step instructions, tailored for every level of expertise.
      </Translate>
    ),
    icon: <StepByStep className={ styles.icon } />,
  },
  {
    title: <Translate>Curated by Experts</Translate>,
    description: (
      <Translate>
        Benefit from the most relevant insights curated by industry experts for your successful software development endeavors.
      </Translate>
    ),
    icon: <TechExperts className={ styles.icon } />
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
