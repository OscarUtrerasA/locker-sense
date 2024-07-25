import { Information } from '@/component/Information'
import { Backarrow } from '@/component/Backarrow'
// import { CircleDollarSign, Check, Search } from 'lucide-react'

export default function UserPass() {
    return (
        <main className="relative grid justify-items-center">
            <div style={{ paddingTop: '8%' }}> {/* Spacer */}</div>
            <Backarrow ruta="/" />
            <form className="bg-surface-100-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/3">
                <div className="mb-6">
                    <label
                        className="block text-xl text-surface-500 font-bold my-2"
                        htmlFor="password"
                    >
                        RUN Cliente
                    </label>
                    <input
                        className="shadow appearance-none border border-error-500 rounded w-full py-2 px-3 text-surface-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="text" // type="password"
                        placeholder="11.111.111-1"
                    />
                    <p className="text-error-500 italic">Ingresa tu RUN.</p>
                </div>

                <br className="h-5" />

                <div className="mb-4">
                    <label
                        className="block text-xl text-surface-500 font-bold mb-2"
                        htmlFor="username"
                    >
                        Número de Orden
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-surface-500 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="number"
                        placeholder="1111111111"
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-primary-500 hover:bg-primary-700 text-white text-xl font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Verificar
                    </button>
                </div>
            </form>
            <p className="text-center text-surface-400 text-xs">
                &copy;2024 TotalPack Ltda.
            </p>
        </main>
    )
}
