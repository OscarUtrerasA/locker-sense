'use client'
import { Cross } from '@/component/Cross'
import { Information } from '@/component/Information'
import { Redirect } from '@/helpers/redirect'

export default function Failure() {
    Redirect('/', 16)
    return (
        <main>
            <div className="relative">
                <Cross />
                <Information
                    title="Identificación fallida"
                    text="Tus credenciales no son válidas. Por favor, verifica tu información e inténtalo de nuevo."
                />
            </div>
        </main>
    )
}
