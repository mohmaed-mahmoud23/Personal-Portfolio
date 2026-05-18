'use client';

import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import { Sparkle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiRedux, 
  SiTailwindcss, 
  SiGreensock, 
  SiFramer, 
  SiSass, 
  SiBootstrap, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiPrisma, 
  SiGit, 
  SiDocker, 
  SiFigma 
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';

const categories = [
  {
    id: "frontend",
    title: "FRONTEND",
    items: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "currentColor" },
      { name: "Redux", Icon: SiRedux, color: "#764ABC" },
      { name: "TailwindCSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "GSAP", Icon: SiGreensock, color: "#88CE02" },
      { name: "Framer Motion", Icon: SiFramer, color: "#E10098" },
      { name: "Sass", Icon: SiSass, color: "#CC6699" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" }
    ]
  },
  {
    id: "database",
    title: "DATABASE",
    items: [
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "Prisma", Icon: SiPrisma, color: "currentColor" }
    ]
  },
  {
    id: "tools",
    title: "TOOLS",
    items: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
      { name: "VSCode", Icon: TbBrandVscode, color: "#007ACC" }
    ]
  }
];

export default function MyStack() {
  const containerRef = useRef(null);
  const categoryRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    // Desktop: fade in + slide up each category row sequentially
    mm.add("(min-width: 769px)", () => {
      categoryRefs.current.forEach((row) => {
        if (!row) return;

        const title = row.querySelector(`.${styles.categoryTitle}`);
        const items = row.querySelectorAll(`.${styles.techItem}`);

        // Set initial invisible state below the baseline
        gsap.set([title, items], { opacity: 0, y: 30 });

        // Trigger animations on scroll
        gsap.to([title, ...items], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });
    });

    // Mobile: disable ScrollTrigger and show normally (clear inline styles)
    mm.add("(max-width: 768px)", () => {
      categoryRefs.current.forEach((row) => {
        if (!row) return;
        const title = row.querySelector(`.${styles.categoryTitle}`);
        const items = row.querySelectorAll(`.${styles.techItem}`);
        gsap.set([title, items], { opacity: 1, y: 0, clearProps: "all" });
      });
    });

    // Clean up all ScrollTriggers and MatchMedia contexts
    return () => mm.revert();
  }, []);

  return (
    <section ref={containerRef} className={styles.myStack} id="stack">
      <div className={styles.header}>
        <div className={styles.sparkleIcon}>
          <Sparkle size={36} fill="#8f55fd" />
        </div>
        <h2>
          <span className={styles.textWhite}>MY </span>
          <span className={styles.textPurple}>STACK</span>
        </h2>
      </div>

      <div className={styles.body}>
        {categories.map((category, index) => {
          const { id, title, items } = category;
          return (
            <div 
              key={id} 
              ref={el => categoryRefs.current[index] = el}
              className={styles.categoryRow}
            >
              <div className={styles.categoryTitle}>{title}</div>
              <div className={styles.techGrid}>
                {items.map((tech) => {
                  const { name, Icon, color } = tech;
                  return (
                    <div 
                      key={name} 
                      className={styles.techItem}
                    >
                      <Icon style={{ color }} />
                      <span>{name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
