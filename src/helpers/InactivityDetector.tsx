import { useEffect, useRef, useState } from 'react'
import { redirect } from './redirect'

const InactivityDetector = () => {
    const [isInactive, setIsInactive] = useState(false)
    const timerRef = useRef<number | undefined>(undefined)
    const timeInactive = 15000 // 60000 ms = 1 minuto de inactividad

    const handleActivity = () => {
        // Si estaba inactivo, ahora está activo
        if (isInactive) {
            setIsInactive(false)
        }

        // Reiniciar el temporizador
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = window.setTimeout(() => {
            setIsInactive(true)
        }, timeInactive)
    }

    useEffect(() => {
        // Añadir event listeners para detectar actividad
        window.addEventListener('mousemove', handleActivity)
        window.addEventListener('keydown', handleActivity)

        // Establecer el temporizador inicial
        timerRef.current = window.setTimeout(() => {
            setIsInactive(true)
        }, timeInactive)

        // Limpiar los event listeners y el temporizador cuando el componente se desmonte
        return () => {
            window.removeEventListener('mousemove', handleActivity)
            window.removeEventListener('keydown', handleActivity)
            if (timerRef.current) {
                clearTimeout(timerRef.current)
            }
        }
    }, [isInactive])

    return (
        <div>{isInactive ? <p>Estás inactivo.</p> : <p>Estás activo.</p>}</div>
    )
}

export default InactivityDetector
