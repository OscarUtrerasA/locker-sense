import { Information } from '@/component/Information'
import { PackageOpen } from 'lucide-react'

export default function Success() {
    return (
        <main>
            <div className="relative  grid justify-items-center">
                <Information
                    title="¡Correcto!"
                    text="Tus credenciales son válidas. Ahora puedes retirar tu pedido del locker."
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
