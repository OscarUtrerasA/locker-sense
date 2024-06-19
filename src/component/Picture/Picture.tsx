"use client";
import React from 'react';
import styles from './Picture.module.scss';

export type PictureProps = {
	picture: string;
}

const Picture: React.FC<PictureProps>  = ({picture}) => {
	return (
		<div className={styles.picture}>
 			<div className={styles.frame}>
				<img className={styles.image} src={picture} alt="imagen de informacion" />
			</div>
 		</div>
	);
};

export default Picture;
