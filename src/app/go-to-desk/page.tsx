'use client'
import { Information } from '@/component/Information'
import { Users } from 'lucide-react'
import { Redirect } from '../../helpers/Redirect'

export default function GoToDesk() {
    Redirect('/', 17)
    return (
        <main>
            <div className="relative grid justify-items-center">
                <Information
                    title="Asistencia necesaria"
                    text="Por favor, diríjase al escritorio de atención para recibir ayuda de uno de nuestros ejecutivos."
                />
                <Users
                    size={256}
                    strokeWidth={1}
                    className="stroke-primary-500 mt-80"
                />
            </div>
        </main>
    )
}
