'use client'
import { Information } from '@/component/Information'
import { LockKeyhole } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { KeyRound } from 'lucide-react'

export default function Home() {
    const router = useRouter()
    function toPassView() {
        router.push('/userpass')
    }
    return (
        <main>
            <div
                className="relative grid justify-items-center"
                onClick={toPassView}
            >
                <LockKeyhole
                    size={256}
                    strokeWidth={1}
                    className="stroke-primary-500 mt-80"
                />

                <Information
                    title="Bienvenido"
                    text="Para acceder, utiliza el código QR o ingresa con tu usuario y clave."
                />
                <KeyRound size={40} className="stroke-primary-500" />
            </div>
        </main>
    )
}
