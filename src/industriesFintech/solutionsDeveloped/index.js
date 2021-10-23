import React from "react";
import styles from "./styles.module.scss";

const solutionsDeveloped = () => {
  return (
    <section className={`${styles.solutionsDeveloped} `}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.fintechSolutions} `}>
          <div className={`${styles.imgDiv}`}>
            <img alt="" src="/images/developed-fintech-soln.svg" />
          </div>
          <div className={`${styles.fintechSolutionsTextDiv}`}>
            <h3>Fintech solutions we have developed</h3>
            <p>
              We help you extend your business limits, providing the latest
              digital solutions that help you grow the customer base and enjoy a
              consistent profit. We thoroughly study your business and develop
              appropriate solutions, helping you find new opportunities in
              everyday life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default solutionsDeveloped;
