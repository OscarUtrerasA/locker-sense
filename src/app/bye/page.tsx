'use client'
import { Information } from '@/component/Information'
import { HandMetal } from 'lucide-react'
import { redirect } from '../../helpers/redirect'

export default function Bye() {
    redirect('/', 12)
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
                    className="stroke-primary-500  mt-80"
                />
            </div>
        </main>
    )
}
