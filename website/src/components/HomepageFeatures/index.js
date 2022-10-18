import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';


export default function HomepageFeatures() {
  return (
      <div className={styles.indexButton}>
      <Link className="button button--primary" to="/sst-website/getting-started">
        <Translate>Getting Started</Translate>
      </Link>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <Link className="button button--primary" to="/sst-website/docs/cpp/component/constructor">
        <Translate>SST Core</Translate>
      </Link>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <Link className="button button--primary" to="/sst-website/docs/elements/ember/QuickStart">
        <Translate>SST Elements</Translate>
      </Link>
      </div>
  );
}
