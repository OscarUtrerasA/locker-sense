'use client'
import { Cross } from '@/component/Cross'
import { Information } from '@/component/Information'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Failure() {
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
            <div className="relative">
                <Cross />
                <Information
                    title="Identificación fallida"
                    text="No pudimos identificar tu código QR. Por favor, verifica que el código sea correcto e intenta de nuevo."
                />
            </div>
        </main>
    )
}
