import { Information } from '@/component/Information'
import { PackageX } from 'lucide-react'

export default function Cacnel() {
    return (
        <main>
            <div className="relative grid justify-items-center">
                <Information
                    title="Orden cancelada"
                    text="El locker se ha abierto. Por favor, retira el pedido."
                />
                <PackageX
                    size={256}
                    strokeWidth={1}
                    className="stroke-primary-500 animate-bounce mt-80"
                />
            </div>
        </main>
    )
}
