"use client";
import React from 'react';
import styles from './MirrorInformation.module.scss';

export type MirrorInformationProps = {
	title: string;
	text: string;
	picture: string;
}

const MirrorInformation: React.FC<MirrorInformationProps>  = ({title, text, picture}) => {
	return (
		<div className={styles.information}>
            <div className={styles.frame}>
				<img className={styles.picture} src={picture} alt="imagen de informacion" />
			</div>
 			<div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
 		</div>
	);
};

export default MirrorInformation;