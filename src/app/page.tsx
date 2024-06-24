import { Information } from '@/component/Information'
import { LockKeyhole } from 'lucide-react'

export default function Home() {
    return (
        <main>
            <div className="relative grid justify-items-center">
                <LockKeyhole
                    size={256}
                    strokeWidth={1}
                    color="#3e9392"
                    className="mt-80"
                />
                <Information
                    title="Locker"
                    text="Nuestro mejor locker hasta ahora."
                />
            </div>
        </main>
    )
}
