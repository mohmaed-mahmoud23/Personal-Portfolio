'use client';
import React from 'react'
import styles from './style.module.scss';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function index({index, title, src, manageModal, url}) {
    const t = useTranslations('Projects');

    return (
        <div onClick={() => window.open(url, "_blank")} onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project} style={{cursor: 'pointer'}}>
            <div className={styles.textContainer}>
                <h2>{title}</h2>
                <p>{t('fullStack')}</p>
            </div>
            <div className={styles.mobileImage}>
                <Image src={`/images/${src}`} width={300} height={200} alt={title} style={{objectFit: 'cover', borderRadius: '10px'}} />
            </div>
        </div>
    )
}
