"use client";
import React from 'react';
import styles from './Information.module.scss';

export type InformationProps = {
	title: string;
	text: string;
	picture: string;
}

const Information: React.FC<InformationProps>  = ({title, text, picture}) => {
	return (
		<div className={styles.information}>
 			<div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
            <img className={styles.picture} src={picture} alt="imagen de informacion" />
 		</div>
	);
};

export default Information;
