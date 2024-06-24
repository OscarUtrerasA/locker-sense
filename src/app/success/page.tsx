import { Information } from "@/component/Information";
import { LockOpen } from "lucide-react";

export default function Success() {
    return (
        <main>
            <div className="relative  grid justify-items-center">
                <Information title="¡Éxito!" text="Tu casillero está ahora abierto. Por favor, toma tus artículos y cierra la puerta."/>
                <LockOpen  size={256} strokeWidth={1} color="#3e9392" className="animate-bounce mt-80"/>
            </div>
        </main>
    );
  }