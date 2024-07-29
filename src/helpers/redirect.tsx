import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function redirect(route: string, time: number) {
    const router = useRouter()
    useEffect(() => {
        // Crear el timeout que actualiza el estado después de 5 segundos (5000 ms)
        const timer = setTimeout(() => {
            router.push(route)
        }, time)

        // Limpiar el timeout si el componente se desmonta antes de que el timeout termine
        return () => clearTimeout(timer)
    }, [])
}
