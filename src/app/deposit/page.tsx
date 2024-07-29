import { Information } from '@/component/Information'
import { Package } from 'lucide-react'

export default function Deposit() {
    return (
        <main>
            <div className="relative grid justify-items-center">
                <Information
                    title="¡Éxito!"
                    text="El casillero está ahora abierto. Por favor, deposita los artículos y cierra la puerta."
                />
                <Package
                    size={256}
                    strokeWidth={1}
                    className="stroke-primary-500 animate-bounce mt-80"
                />
            </div>
        </main>
    )
}
