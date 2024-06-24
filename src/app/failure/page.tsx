import { Cross } from '@/component/Cross'
import { Information } from '@/component/Information'

export default function Success() {
    return (
        <main>
            <div className="relative">
                <Cross />
                <Information
                    title="Identificación fallida"
                    text="No pudimos identificar tu código QR. Por favor, verifica que el código sea correcto e intenta de nuevo."
                />
            </div>
        </main>
    )
}
