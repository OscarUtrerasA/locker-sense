'use client'
import { Backarrow } from '@/component/Backarrow'
import { Keyboard } from '@/component/Keyboard'
import { FormEvent } from 'react'
import { useState } from 'react'
// import { CircleDollarSign, Check, Search } from 'lucide-react'

export default function UserPass() {
    const [password, setPassword] = useState('')
    const [run, setRun] = useState('')
    const [responseMessage, setResponseMessage] = useState('')
    const [isRunFocused, setIsRunFocused] = useState(false)
    const [isPasswordFocused, setIsPasswordFocused] = useState(false)

    type Tecla = {
        ancho: string
        accion: 'add' | 'delete' | 'suprimir'
        text: string
    }

    const handleTeclaClick = (tecla: Tecla, selection: 'run' | 'pass') => {
        if (selection === 'run') {
            if (tecla.accion == 'delete') setRun('')
            else setRun(formatRUN(run + tecla.text))
        } else if (selection === 'pass') {
            if (tecla.accion == 'delete') setPassword('')
            else setPassword(password + tecla.text)
        }
    }

    function formatRUN(run: string): string {
        // Eliminar cualquier carácter que no sea un número o la letra K
        run = run.replace(/[^0-9kK]/g, '')

        // Separar el dígito verificador del resto del RUN
        const runWithoutDV = run.slice(0, -1)
        const dv = run.slice(-1)

        // Formatear el RUN sin el dígito verificador
        let formattedRUN = ''
        for (let i = runWithoutDV.length - 1, j = 1; i >= 0; i--, j++) {
            formattedRUN = runWithoutDV.charAt(i) + formattedRUN
            if (j % 3 === 0 && i !== 0) {
                formattedRUN = '.' + formattedRUN
            }
        }

        // Agregar el dígito verificador con un guion
        formattedRUN += '-' + dv.toUpperCase()

        return formattedRUN
    }

    const toggleSelection = (selection: 'run' | 'pass'): void => {
        if (selection === 'run') {
            setIsRunFocused(true)
            setIsPasswordFocused(false)
        } else if (selection === 'pass') {
            setIsRunFocused(false)
            setIsPasswordFocused(true)
        }
    }

    type FilasTeclas = Tecla[]

    // El objeto rut con el tipo correspondiente
    const rut: { teclas: FilasTeclas[] } = {
        teclas: [
            [
                { ancho: '1', accion: 'add', text: '1' },
                { ancho: '1', accion: 'add', text: '2' },
                { ancho: '1', accion: 'add', text: '3' },
            ],
            [
                { ancho: '1', accion: 'add', text: '4' },
                { ancho: '1', accion: 'add', text: '5' },
                { ancho: '1', accion: 'add', text: '6' },
            ],
            [
                { ancho: '1', accion: 'add', text: '7' },
                { ancho: '1', accion: 'add', text: '8' },
                { ancho: '1', accion: 'add', text: '9' },
            ],
            [
                { ancho: '1', accion: 'add', text: 'K' },
                { ancho: '1', accion: 'add', text: '0' },
                { ancho: '1', accion: 'delete', text: 'Borrar' },
            ],
        ],
    }

    const pass: { teclas: FilasTeclas[] } = {
        teclas: [
            [
                { ancho: '1', accion: 'add', text: '1' },
                { ancho: '1', accion: 'add', text: '2' },
                { ancho: '1', accion: 'add', text: '3' },
            ],
            [
                { ancho: '1', accion: 'add', text: '4' },
                { ancho: '1', accion: 'add', text: '5' },
                { ancho: '1', accion: 'add', text: '6' },
            ],
            [
                { ancho: '1', accion: 'add', text: '7' },
                { ancho: '1', accion: 'add', text: '8' },
                { ancho: '1', accion: 'add', text: '9' },
            ],
            [
                { ancho: '1', accion: 'add', text: '' },
                { ancho: '1', accion: 'add', text: '0' },
                { ancho: '1', accion: 'delete', text: 'Borrar' },
            ],
        ],
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(JSON.stringify({ run, password }))

        const apiUrl = `http://localhost:85/validate?user=${encodeURIComponent(
            run
        )}&pass=${encodeURIComponent(password)}`

        // Realizar la petición POST
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                const data = await response.json()
                setResponseMessage(`Response: ${JSON.stringify(data)}`)
            } else {
                setResponseMessage(`Error: ${response.statusText}`)
            }
        } catch (error: any) {
            setResponseMessage(`Error: ${error.message}`)
        }
    }

    return (
        <main className="relative grid justify-items-center">
            <div style={{ paddingTop: '8%' }}> {/* Spacer */}</div>
            <Backarrow ruta="/" />
            <form
                onSubmit={handleSubmit}
                className="bg-surface-100-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/3"
            >
                <div>
                    <label
                        className="block text-xl text-surface-500 font-bold my-2"
                        htmlFor="run"
                    >
                        RUT:
                    </label>
                    <input
                        className="shadow appearance-none border border-error-500 rounded w-full py-2 px-3 text-surface-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="run"
                        id="run"
                        value={run}
                        onFocus={() => toggleSelection('run')}
                        onChange={(e) => setRun(e.target.value)}
                    />
                </div>
                <br className="h-5" />
                <div>
                    <label
                        htmlFor="password"
                        className="block text-xl text-surface-500 font-bold mb-2"
                    >
                        Contraseña:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-surface-500 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password"
                        value={password}
                        onFocus={() => toggleSelection('pass')}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-700 text-white text-xl font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Validar
                </button>
            </form>
            {isRunFocused && (
                <div className="w-9/12 py-32">
                    <div className="grid gap-4 grid-cols-3 justify-center">
                        {rut.teclas.flat().map((tecla, index) => (
                            <button
                                key={index}
                                className="flex items-center justify-center w-full h-20 rounded-lg border-2 border-transparent bg-primary-400 text-white text-3xl"
                                onClick={() => handleTeclaClick(tecla, 'run')}
                            >
                                {tecla.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {isPasswordFocused && (
                <div className="w-9/12 py-32">
                    <div className="grid gap-4 grid-cols-3 justify-center">
                        {pass.teclas.flat().map((tecla, index) => (
                            <button
                                key={index}
                                className="flex items-center justify-center w-full h-20 rounded-lg border-2 border-transparent bg-primary-400 text-white text-3xl"
                                onClick={() => handleTeclaClick(tecla, 'pass')}
                            >
                                {tecla.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            <p className="text-center text-surface-400 text-xs">
                &copy;2024 TotalPack Ltda.
            </p>
        </main>
    )
}
