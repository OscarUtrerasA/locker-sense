import { Hamster } from "@/component/Hamster";
import { Information } from "@/component/Information";
import { Picture } from "@/component/Picture";

export default function Validation() {
    return (
        <main>
            <div className="relative">
                <Information title="Un momento..." text="Estamos procesando tu código QR. Esto puede tomar unos momentos. Por favor, espera la confirmación." />
                {/* <Picture picture="../qr-code.svg"/>              */}
                <Hamster/>
            </div>
        </main>
    );
  }