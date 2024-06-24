"use client";
import React from 'react';
import './Cross.css';

export type CrossProps = {
	// types...
}

const Cross: React.FC<CrossProps>  = ({}) => {
	return (
		<div className="loader">
			<div className="container">
				<div className="carousel">
				<div className="death"></div>
				<div className="death"></div>
				<div className="death"></div>
				<div className="death"></div>
				<div className="death"></div>
				<div className="death"></div>
				<div className="death"></div>
				</div> 
			</div>
		</div>
	);
};

export default Cross;
