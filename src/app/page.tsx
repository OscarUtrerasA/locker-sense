import { Information } from '@/component/Information'
import { LockKeyhole } from 'lucide-react'

import colors from 'tailwindcss/colors'
const primary_500 = colors.indigo[400]

export default function Home() {
    return (
        <main>
            <div className="relative grid justify-items-center">
                <LockKeyhole
                    size={256}
                    strokeWidth={1}
                    className="stroke-primary-500 mt-80"
                />

                <Information
                    title="Locker"
                    text="Nuestro mejor locker hasta ahora."
                />
            </div>
        </main>
    )
}
