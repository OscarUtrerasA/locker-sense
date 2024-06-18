import { MirrorInformation } from "@/component/MirrorInformation";

export default function Success() {
    return (
        <main>
            <div className="relative">
                <MirrorInformation title="Identificación fallida" text="No pudimos identificar tu código QR. Por favor, verifica que el código sea correcto e intenta de nuevo." picture="../Depth6.svg"/>
            </div>
        </main>
    );
  }