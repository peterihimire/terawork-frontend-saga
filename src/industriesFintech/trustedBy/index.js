import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const trustedBy = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <section className={`${styles.trustedBy} `}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.fintechSolutions} `}> */}
        <div className={`${styles.trustedByTextDiv}`}>
          <h3>trusted by</h3>
          <div>
            <Swiper
              spaceBetween={2}
              slidesPerView={1}
              pagination={pagination}
              // className={`swiper-wrapper home ${styles.slideWrapper}`}
              className={` ${styles.slideWrapper}`}
              loop
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              <SwiperSlide>
                <div className={styles.slideGroup}>
                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-1.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-2.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-3.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-4.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles.slideGroup}>
                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-2.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-2.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>

                  <div className={styles.slideItem}>
                    <div className={styles.slideArrow}>
                      <img
                        src="/images/left-arrow-circle.svg"
                        alt="arrow-left-circle"
                      />
                    </div>
                    <div className={styles.logoText}>
                      <img
                        src="/images/trusted-by-2.svg"
                        alt="arrow-left-circle"
                      />
                      <h6>Fintech</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default trustedBy;
