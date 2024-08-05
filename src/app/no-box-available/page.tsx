'use client'
import { Information } from '@/component/Information'
import { PackageX } from 'lucide-react'
import { Redirect } from '../../helpers/Redirect'

export default function NoBoxAvailable() {
    Redirect('/', 18)
    return (
        <main>
            <div className="relative grid justify-items-center">
                <Information
                    title="¡Locker sin espacio!"
                    text="En este momento, no hay casilleros del tamaño requerido. Por favor, intente nuevamente más tarde."
                />
                <PackageX
                    size={256}
                    strokeWidth={1}
                    className="stroke-primary-500 mt-80"
                />
            </div>
        </main>
    )
}
