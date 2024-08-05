'use client'
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
    const router = useRouter()
    const [connection, setConnection] = useState<HubConnection | null>(null)
    const clientMethod = 'SetCurrentView' // This is the method invoqued by the .Net API

    useEffect(() => {
        const ports = [85, 5000] // Lista de puertos a intentar
        let connection = null

        for (const port of ports) {
            try {
                const connect = new HubConnectionBuilder()
                    .withUrl(`http://localhost:${port}/frontRpc`)
                    .withAutomaticReconnect()
                    .configureLogging(LogLevel.Information)
                    .build()

                setConnection(connect)

                connect.start()
                connection = connect // Guardar la conexión exitosa

                connect.on(clientMethod, (content) => {
                    console.log('Cambiando la pagina a: ', content)
                    routerPush(content)
                })

                // Si se conecta correctamente, salimos del bucle
                break
            } catch (err) {
                console.error(
                    `Error while connecting to SignalR Hub on port ${port}:`,
                    err
                )
                // Si ocurre un error, seguimos con el siguiente puerto
            }
        }
        return () => {
            if (connection) {
                connection.off(clientMethod)
            }
        }
    }, [])

    const routerPush = (rute: string) => {
        return router.push(rute)
    }
    return <div className={styles.footer}></div>
}

export default Footer
