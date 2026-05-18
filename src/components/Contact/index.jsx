import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef, useEffect } from 'react';
import Magnetic from '../../common/Magnetic';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Contact() {
    const t = useTranslations('Contact');
    const container = useRef(null);
    const buttonContainer = useRef(null);
    const svgRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            gsap.fromTo(container.current, { y: -500 }, {
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true
                }
            });

            gsap.fromTo(buttonContainer.current, { x: 0 }, {
                x: 100,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true
                }
            });

            gsap.fromTo(svgRef.current, { rotate: 120 }, {
                rotate: 90,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true
                }
            });
        });

        mm.add("(max-width: 768px)", () => {
            gsap.set([container.current, buttonContainer.current, svgRef.current], {
                clearProps: "all"
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <div id="contact" ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image 
                            fill={true}
                            alt={"image"}
                            src={`/images/image (28).png`}
                            style={{ objectFit: 'cover', transform: 'scale(1.5)' }}
                            />
                        </div>
                        <h2>{t('title1')}</h2>
                    </span>
                    <h2>{t('title2')}</h2>
                    <div ref={buttonContainer} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"var(--accent)"} className={styles.button}>
                            <p>{t('button')}</p>
                        </Rounded>
                    </div>
                    <svg ref={svgRef} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </svg>
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <p>mohamedmahmoud43467@gmail.com</p>
                        </Rounded>
                        <Rounded>
                            <p>+20 106 326 4363</p>
                        </Rounded>
                </div>
                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>{t('copyright')}</h3>
                            <p>{t('copyrightText')}</p>
                        </span>
                        <span>
                            <h3>{t('localTime')}</h3>
                            <p>{t('location')}</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <h3>{t('socials')}</h3>
                        <Magnetic>
                            <a href="#" style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit', textDecoration: 'none'}}>
                                <FaGithub size={24} />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#" style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit', textDecoration: 'none'}}>
                                <FaLinkedin size={24} />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#" style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit', textDecoration: 'none'}}>
                                <FaTwitter size={24} />
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#" style={{display: 'flex', alignItems: 'center', gap: '8px', color: 'inherit', textDecoration: 'none'}}>
                                <FaInstagram size={24} />
                            </a>
                        </Magnetic>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
