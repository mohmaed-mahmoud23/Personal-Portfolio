'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Sparkle, Star } from 'lucide-react';
import styles from './style.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const reviewsData = [
  {
    id: 1,
    title: "Administrative Consulting Site",
    client: "Sara A.",
    service: "Webflow Development",
    image: "/images/WhatsApp Image 2026-05-01 at 4.05.08 PM.jpeg"
  },
  {
    id: 2,
    title: "React/JSX Integration",
    client: "Rayan A.",
    service: "React & Next.js Development",
    image: "/images/WhatsApp Image 2026-05-01 at 4.05.27 PM.jpeg"
  },
  {
    id: 3,
    title: "Administrative Consulting Site",
    client: "Sara A.",
    service: "Webflow Development",
    image: "/images/WhatsApp Image 2026-05-01 at 4.05.08 PM.jpeg"
  },
  {
    id: 4,
    title: "React/JSX Integration",
    client: "Rayan A.",
    service: "React & Next.js Development",
    image: "/images/WhatsApp Image 2026-05-01 at 4.05.27 PM.jpeg"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className={styles.header}>
        <div className={styles.sparkleIcon}>
          <Sparkle size={36} fill="#8f55fd" />
        </div>
        <h2>
          <span className={styles.textWhite}>CLIENT </span>
          <span className={styles.textPurple}>REVIEWS</span>
        </h2>
      </div>

      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40
            }
          }}
          className="testimonialsSwiper"
        >
          {reviewsData.map((item, idx) => (
            <SwiperSlide key={`${item.id}-${idx}`}>
              <div className={styles.testimonialCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.clientMeta}>
                    <h3 className={styles.clientName}>{item.client}</h3>
                    <p className={styles.serviceName}>{item.service}</p>
                  </div>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={styles.starIcon} fill="#FFC107" color="#FFC107" />
                    ))}
                  </div>
                </div>

                <div className={styles.imageContainer}>
                  <Image
                    src={item.image}
                    alt={`${item.client} review - ${item.title}`}
                    width={600}
                    height={400}
                    className={styles.reviewImage}
                    priority={idx < 2}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
