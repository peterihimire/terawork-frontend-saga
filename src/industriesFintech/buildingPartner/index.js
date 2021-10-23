import React from "react";
import styles from "./styles.module.scss";

const buildingPartner = () => {
  return (
    <section className={styles.buildingPartner}>
      <div className={`${styles.imageRight}`}>
        <div className={`${styles.buildingPartnerContent} wrapper`}>
          <div className={`${styles.buildingText}`}>
            <h3>Building high impact partner ecosystems</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat
              sunt s.
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat
              sunt s.
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat
              sunt s.
            </p>
          </div>
          <div className={`${styles.man}`}>
            <img alt="" src="/images/fintech-grouped-img1.png" />
          </div>
        </div>
      </div>
      <div className={`${styles.wrapper} wrapper`}>
        <div>
          <div className={`${styles.heading}`}>
            <h6>What we will do for you</h6>
            <p>The way we develop fintech software at cloudfift</p>
          </div>

          <div className={`${styles.developFintechDiv}`}>
            <div className={`${styles.developFintechGrid}`}>
              <div className={`${styles.singleGrid}`}>
                <div className={`${styles.stackTextDiv}`}>
                  <img alt="" src="/images/money-stack-icon.svg" />
                  <h5>Deliver industy-leading service</h5>
                </div>
                <p>
                  We provide financial software solutions that help you deliver
                  exceptional financial services, with improved operational
                  efficiency, lower transaction fees and diverse,
                  blockchain-enabled payment options. Our software solutions and
                  R&D support help you
                </p>
              </div>
              <div className={`${styles.singleGrid}`}>
                <div className={`${styles.stackTextDiv}`}>
                  <img alt="" src="/images/money-stack-icon.svg" />
                  <h5>Deliver industy-leading service</h5>
                </div>
                <p>
                  We provide financial software solutions that help you deliver
                  exceptional financial services, with improved operational
                  efficiency, lower transaction fees and diverse,
                  blockchain-enabled payment options. Our software solutions and
                  R&D support help you
                </p>
              </div>
              <div className={`${styles.singleGrid}`}>
                <div className={`${styles.stackTextDiv}`}>
                  <img alt="" src="/images/money-stack-icon.svg" />
                  <h5>Deliver industy-leading service</h5>
                </div>
                <p>
                  We provide financial software solutions that help you deliver
                  exceptional financial services, with improved operational
                  efficiency, lower transaction fees and diverse,
                  blockchain-enabled payment options. Our software solutions and
                  R&D support help you
                </p>
              </div>
              <div className={`${styles.singleGrid}`}>
                <div className={`${styles.stackTextDiv}`}>
                  <img alt="" src="/images/money-stack-icon.svg" />
                  <h5>Deliver industy-leading service</h5>
                </div>
                <p>
                  We provide financial software solutions that help you deliver
                  exceptional financial services, with improved operational
                  efficiency, lower transaction fees and diverse,
                  blockchain-enabled payment options. Our software solutions and
                  R&D support help you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.contactUsLine} wrapper`}>
        <div>
          <h4>
            Learn how our Fintech software development services can help you
            evolve
          </h4>
        </div>
        <div className={`${styles.contactLink}`}>
          <span>contact us</span>
          <span>
            <img alt="" src="/images/left-arrow-circle.svg" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default buildingPartner;
