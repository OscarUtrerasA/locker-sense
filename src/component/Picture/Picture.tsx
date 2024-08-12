'use client'
import React from 'react'
import styles from './Picture.module.scss'
import Image from 'next/image'

export type PictureProps = {
    picture: string
}

const Picture: React.FC<PictureProps> = ({ picture }) => {
    return (
        <div className={styles.picture}>
            <div className={styles.frame}>
                <Image
                    className={styles.image}
                    src={picture}
                    alt="imagen de informacion"
                    layout="responsive"
                />
            </div>
        </div>
    )
}

export default Picture
