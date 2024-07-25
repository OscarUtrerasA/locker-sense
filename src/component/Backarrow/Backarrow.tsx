'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Undo2 } from 'lucide-react'

export type BackarrowProps = {
    ruta: string
}

const Backarrow: React.FC<BackarrowProps> = ({ ruta }) => {
    const router = useRouter()
    return (
        <div
            style={{
                display: 'grid',
                justifyItems: 'start', // Alinea los elementos al principio (izquierda)
                width: '100%', // Ocupa todo el ancho horizontal
                padding: '2%',
            }}
        >
            <Undo2
                size={90}
                strokeWidth={1}
                className="stroke-primary-500"
                onClick={() => router.push(ruta)}
            />
        </div>
    )
}

export default Backarrow
