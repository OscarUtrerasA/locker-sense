'use client'
import { Information } from '@/component/Information'
import { PackageCheck } from 'lucide-react'
import { redirect } from '../../helpers/redirect'

export default function DepositDone() {
    redirect('/', 22)
    return (
        <main>
            <div className="relative grid justify-items-center">
                <Information
                    title="Depósito realizado"
                    text="Te confirmo que el depósito se ha realizado con éxito. Si necesitas algo más, por favor comunícate con nuestro equipo."
                />
                <PackageCheck
                    size={256}
                    strokeWidth={1}
                    className="stroke-primary-500 mt-80"
                />
            </div>
        </main>
    )
}
