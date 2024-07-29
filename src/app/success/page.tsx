import { Information } from '@/component/Information'
import { PackageOpen } from 'lucide-react'

export default function Success() {
    return (
        <main>
            <div className="relative  grid justify-items-center">
                <Information
                    title="¡Éxito!"
                    text="Tu casillero está ahora abierto. Por favor, toma tus artículos y cierra la puerta."
                />
                <PackageOpen
                    size={256}
                    strokeWidth={1}
                    className="stroke-primary-500 animate-bounce mt-80"
                />
            </div>
        </main>
    )
}
