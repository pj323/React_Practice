import React from 'react';
import styles from './Test.module.css';

const ProdEDCR: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1>EDCR - Prod</h1>
      <p>Details about the EDCR Prod environment.</p>
    </div>
  );
};

export default ProdEDCR;