"use client";
import React from 'react';
import styles from './Footer.module.scss';

import { useEffect, useState } from "react";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";

import { useRouter } from 'next/navigation'

export type FooterProps = {
	// types...
}

const Footer: React.FC<FooterProps>  = ({}) => {
	const router = useRouter()
	const [connection, setConnection] = useState<HubConnection | null>(null);
	const canal = "ReceiveMessage";

	useEffect(() => {
		const connect = new HubConnectionBuilder()
		.withUrl("http://localhost:5266/hub")
		.withAutomaticReconnect()
		.configureLogging(LogLevel.Information)
		.build();

		setConnection(connect);

		connect
		.start()
		.then(() => {
			connect.on(canal, (_sender, content, _sentTime) => {
			routerPush(content);
			});
			connect.invoke("RetrieveMessageHistory");
		})
		.catch((err) =>
			console.error("Error while connecting to SignalR Hub:", err)
		);
		return () => {
		if (connection) {
			connection.off(canal);
		}
		};
	}, []);

	const routerPush = (rute: string) => {
		return router.push(rute);
	}
	return (
		<div className={styles.footer}>
 		</div>
	);
};

export default Footer;
