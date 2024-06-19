import { Information } from "@/component/Information";
import { Picture } from "@/component/Picture";

export default function Success() {
    return (
        <main>
            <div className="relative">
                <Picture picture="../Depth5.svg"/>
                <Information title="Identificación fallida" text="No pudimos identificar tu código QR. Por favor, verifica que el código sea correcto e intenta de nuevo." />
            </div>
        </main>
    );
  }