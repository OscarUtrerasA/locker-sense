'use client'
import { Backarrow } from '@/component/Backarrow'
import { FormEvent } from 'react'
import { useState } from 'react'
// import { CircleDollarSign, Check, Search } from 'lucide-react'

export default function UserPass() {
    const [password, setPassword] = useState('')
    const [run, setRun] = useState('')
    const [responseMessage, setResponseMessage] = useState('')
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
                        RUN:
                    </label>
                    <input
                        className="shadow appearance-none border border-error-500 rounded w-full py-2 px-3 text-surface-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="run"
                        id="run"
                        value={run}
                        onChange={(e) => setRun(e.target.value)}
                    />
                </div>
                <br className="h-5" />
                <div>
                    <label
                        htmlFor="password"
                        className="block text-xl text-surface-500 font-bold mb-2"
                    >
                        Orden:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-surface-500 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password"
                        value={password}
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
            <p className="text-center text-surface-400 text-xs">
                &copy;2024 TotalPack Ltda.
            </p>
        </main>
    )
}
