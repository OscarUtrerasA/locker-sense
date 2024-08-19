'use client'
import AppSetting from '../../../appSettings.json'
import React from 'react'
import styles from './Footer.module.scss'

import { useEffect, useState } from 'react'
import {
    HubConnection,
    HubConnectionBuilder,
    LogLevel,
} from '@microsoft/signalr'

import { useRouter } from 'next/navigation'

export type FooterProps = {
    // types...
}

const Footer: React.FC<FooterProps> = ({}) => {
    let url: string = AppSetting.api['locker-service-url']
    const router = useRouter()
    const [connection, setConnection] = useState<HubConnection | null>(null)
    const clientMethod = 'SetCurrentView' // This is the method invoqued by the .Net API
    const routerPush = (rute: string) => {
        return router.push(rute)
    }
    useEffect(() => {
        const connect = new HubConnectionBuilder()
            .withUrl('http://localhost:85/frontRpc')
            .withAutomaticReconnect()
            .configureLogging(LogLevel.Information)
            .build()

        setConnection(connect)

        connect
            .start()
            .then(() => {
                connect.on(clientMethod, (content) => {
                    console.log('Cambiando la pagina a: ', content)
                    routerPush(content)
                })
                // connect.invoke("RetrieveMessageHistory");
            })
            .catch((err) =>
                console.error('Error while connecting to SignalR Hub:', err)
            )

        return () => {
            if (connection) {
                connection.off(clientMethod)
            }
        }
    }, [connection, routerPush])
    return <div className={styles.footer}></div>
}

export default Footer
