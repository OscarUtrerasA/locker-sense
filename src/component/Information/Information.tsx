'use client'
import React from 'react'
import styles from './Information.module.scss'

export type InformationProps = {
    title: string
    text: string
}

const Information: React.FC<InformationProps> = ({ title, text }) => {
    return (
        <div className={styles.information}>
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
        </div>
    )
}

export default Information
