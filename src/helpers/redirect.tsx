import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function Redirect(route: string, words: number) {
    const router = useRouter()
    const readingSpeed = 150 // palabras por minuto
    //Words es la cantidad de palabras a leer en la página, se cuenta tanto título como cuerpo.
    const seconds = (words / readingSpeed) * 60 * 1000
    useEffect(() => {
        // Crear el timeout que actualiza el estado después de 5 segundos (5000 ms)
        const timer = setTimeout(() => {
            router.push(route)
        }, seconds)

        // Limpiar el timeout si el componente se desmonta antes de que el timeout termine
        return () => clearTimeout(timer)
    }, [])
}
