'use client'
import { Information } from '@/component/Information'
import { ThumbsUp } from 'lucide-react'
import { Redirect } from '../../helpers/Redirect'

export default function Bye() {
    Redirect('/', 13)
    return (
        <main>
            <div className="relative  grid justify-items-center">
                <Information
                    title="¡Saludos!"
                    text="Gracias por utilizar nuestros lockers. Esperamos que tu experiencia haya sido excelente."
                />
                <ThumbsUp
                    size={256}
                    strokeWidth={1}
                    className="stroke-primary-500  mt-80"
                />
            </div>
        </main>
    )
}
