import { Information } from "@/component/Information";

export default function Validation() {
    return (
        <main>
            <div className="relative">
                <Information title="Un momento..." text="Estamos procesando tu código QR. Esto puede tomar unos momentos. Por favor, espera la confirmación." picture="../qr-code.svg"/>
            </div>
        </main>
    );
  }