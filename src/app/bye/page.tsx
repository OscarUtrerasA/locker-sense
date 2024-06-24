import { Information } from '@/component/Information'
import { HandMetal } from 'lucide-react'

export default function Bye() {
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
                    color="#3e9392"
                    className="mt-80"
                />
            </div>
        </main>
    )
}
