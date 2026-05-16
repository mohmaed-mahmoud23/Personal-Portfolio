import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('Contact');
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{y}} id="contact" ref={container} className={styles.contact}>
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
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"var(--accent)"} className={styles.button}>
                            <p>{t('button')}</p>
                        </Rounded>
                    </motion.div>
                    <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
                    </motion.svg>
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
        </motion.div>
    )
}
