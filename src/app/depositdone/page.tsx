'use client'
import { Information } from '@/component/Information'
import { PackageCheck } from 'lucide-react'
import { redirect } from '../../helpers/redirect'

export default function DepositDone() {
    redirect('/', 5000)
    return (
        <main>
            <div className="relative grid justify-items-center">
                <Information
                    title="Depósito realizado"
                    text="Que no te pegue la puerta al salir."
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
