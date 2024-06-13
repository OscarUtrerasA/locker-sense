"use client";
import React from 'react';
import styles from './Title.module.scss';

export type TitleProps = {
	// types...
}

const Title: React.FC<TitleProps>  = ({}) => {
	return (
		<div className={styles.title}>
 			Locker
 		</div>
	);
};

export default Title;
