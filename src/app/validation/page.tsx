import { Hamster } from '@/component/Hamster'
import { Information } from '@/component/Information'

export default function Validation() {
    return (
        <main>
            <div>
                <Information
                    title="Un momento..."
                    text="Estamos procesando tus credenciales. Esto puede tomar unos momentos. Por favor, espera la confirmación."
                />
                <Hamster />
            </div>
        </main>
    )
}
