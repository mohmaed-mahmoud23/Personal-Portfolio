'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import { useTranslations } from 'next-intl';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiGithub } from 'react-icons/si';

const projects = [
  {
    title: "Habib Academy",
    categoryKey: "fullStack",
    description:
      "A complete educational platform built with Next.js and .NET, featuring course management, student enrollment, authentication, and interactive learning dashboards.",
    image: "image (350).png",
    url: "https://academy-project-d1j6.vercel.app/",
  },

  {
    title: "Paint Booking",
    categoryKey: "fullStack",
    description:
      "A furniture painting booking platform built with Next.js and NestJS, allowing customers to schedule services, manage requests, and track project progress.",
    image: "image (30).png",
    url: "https://gradute-progect-65fk.vercel.app/",
  },

  {
    title: "TechMart",
    categoryKey: "fullStack",
    description:
      "A modern e-commerce platform with PayPal and Vodafone Cash payment integration, featuring product management, secure checkout, and optimized shopping experiences.",
    image: "image (3450).png",
    url: "https://ecommerce-nextjs-and-nestjs.vercel.app/",
  },

  {
    title: "Auto Store",
    categoryKey: "frontend",
    description:
      "A modern automotive showroom website built with HTML, CSS, JavaScript, and Bootstrap, featuring responsive layouts, vehicle showcases, smooth user interactions, and a professional browsing experience.",
    image: "image (9890).png",
    url: "https://auto-store-landing-page.vercel.app/",
  },

  {
    title: "Super Pro",
    categoryKey: "frontend",
    description:
      "A premium business landing page built with HTML, CSS, JavaScript, and Bootstrap, designed with modern UI principles, responsive layouts, smooth animations, and high-performance front-end architecture.",
    image: "image (45).png",
    url: "https://super-pro-frontend.vercel.app/",
  },
];

export default function Projects() {
  const t = useTranslations('Projects');
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    // Desktop & Tablet (width > 768px): stagger entry animations on scroll
    mm.add("(min-width: 769px)", () => {
      gsap.set(cardRefs.current, { opacity: 0, y: 50 });

      gsap.to(cardRefs.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    // Mobile (width <= 768px): disable ScrollTrigger completely (instant rendering)
    mm.add("(max-width: 768px)", () => {
      gsap.set(cardRefs.current, { opacity: 1, y: 0, clearProps: "all" });
    });

    // Revert media queries and destroy ScrollTriggers on SPA unmounting
    return () => mm.revert();
  }, []);

  // Spotlight Effect: calculate relative mouse coordinates on cards
  useEffect(() => {
    const cards = cardRefs.current;
    
    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.projects} id="work">
      <div className={styles.latestProjectsLabel}>
        <p>LATEST PROJECTS</p>
        <div className={styles.underline}></div>
      </div>

      <div className={styles.bentoGrid}>
        {projects.map((project, index) => {
          const { title, categoryKey, description, url, image } = project;
          
          // Determine bento layouts: Card 1 is split left/right, Card 2 is stacked, Card 3 is alternate split
          const spanClass = index === 0 ? styles.colSpan2 : index === 2 ? styles.colSpan2 : styles.colSpan1;
          const layoutClass = index === 0 
            ? styles.largeCardLayout 
            : index === 2 
              ? styles.largeCardLayoutAlt 
              : styles.smallCardLayout;
          
          return (
            <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={title}
              ref={el => cardRefs.current[index] = el}
              className={`${styles.card} ${spanClass}`}
            >
              <div className={styles.cardContent}>
                <div className={layoutClass}>
                  
                  {/* Left Column / Top Row (Text details) */}
                  <div className={styles.cardText}>
                    <div>
                      <div className={styles.cardHeader}>
                        <span className={styles.tag}>{t(categoryKey)}</span>
                        <div className={styles.arrowIcon}>
                          <ArrowUpRight size={20} />
                        </div>
                      </div>

                      <div className={styles.cardBody}>
                        <h3 className={styles.projectName}>{title}</h3>
                        <p className={styles.description}>{description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column / Bottom Row (Web Mockup - Flat, Bright and Beautiful) */}
                  <div className={styles.mockupContainer}>
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={`/images/${image}`}
                        fill={true}
                        alt={`${title} Screenshot`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index === 0}
                        unoptimized={true} // Bypasses optimization if Next.js adds compression dims
                      />
                    </div>
                  </div>

                </div>
              </div>
            </a>
          );
        })}

        {/* 4th Bento Tile: Explore More Work Card */}
        <a 
          href="https://github.com/mohmaed-mahmoud23" 
          target="_blank"
          rel="noopener noreferrer"
          ref={el => cardRefs.current[3] = el}
          className={`${styles.card} ${styles.colSpan1} ${styles.exploreCard}`}
        >
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <span className={styles.tag}>GitHub</span>
              <div className={styles.arrowIcon}>
                <ArrowRight size={20} />
              </div>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.projectName}>{t('moreWork')}</h3>
              <p className={styles.description}>Explore all of my repositories, active codebases, and open-source contributions.</p>
            </div>

            <div className={styles.exploreIconWrapper}>
              <SiGithub size={60} className={styles.githubGlow} />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
