import { Information } from "@/component/Information";
import { Picture } from "@/component/Picture";

export default function Success() {
    return (
        <main>
            <div className="relative">
                <Information title="¡Éxito!" text="Tu casillero está ahora abierto. Por favor, toma tus artículos y cierra la puerta."/>
                <Picture picture="../Depth6.svg"/>
            </div>
        </main>
    );
  }