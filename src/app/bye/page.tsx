'use client'
import { Information } from '@/component/Information'
import { HandMetal } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Bye() {
    const router = useRouter()
    useEffect(() => {
        // Crear el timeout que actualiza el estado después de 5 segundos (5000 ms)
        const timer = setTimeout(() => {
            router.push('/')
        }, 5000)

        // Limpiar el timeout si el componente se desmonta antes de que el timeout termine
        return () => clearTimeout(timer)
    }, [])
    return (
        <main>
            <div className="relative  grid justify-items-center">
                <Information
                    title="¡Gracias por usar locker!"
                    text="Que no te pegue la puerta al salir."
                />
                <HandMetal
                    size={256}
                    strokeWidth={1}
                    className="stroke-primary-500  mt-80"
                />
            </div>
        </main>
    )
}
