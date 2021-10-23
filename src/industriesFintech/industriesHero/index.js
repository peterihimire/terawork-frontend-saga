import React from "react";
import styles from "./styles.module.scss";

const hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.wrapper} wrapper`}>
        <h5>Industry</h5>
        <h3>FinTech</h3>
        <p>
          We help the financial services sector manage risk and unlock Big
          Data’s potential – with advanced analytics, Machine Learning and more.
        </p>

        <div className={styles.related}>
          <div>
            <h5>Related Industries</h5>
            <ul>
              <li>Banking and Financial Services</li>
              <li>Insurance</li>
              <li>Retail</li>
              <li>Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
