'use client'
import React from 'react'
import { useState } from 'react'

export type KeyboardProps = {
    // types...
}

const Keyboard: React.FC<KeyboardProps> = ({}) => {
    type Tecla = {
        ancho: string
        accion: 'add' | 'delete' | 'suprimir'
        text: string
    }

    const handleTeclaClick = (tecla: Tecla) => {
        console.log(`Acción: ${tecla.accion}, Texto: ${tecla.text}`)
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
                { ancho: '1', accion: 'delete', text: 'delete' },
            ],
        ],
    }

    return (
        <div className="w-9/12 py-32">
            <div className="grid gap-4 grid-cols-3 justify-center">
                {rut.teclas.flat().map((tecla, index) => (
                    <button
                        key={index}
                        className="flex items-center justify-center w-full h-20 rounded-lg border-2 border-transparent bg-primary-400 text-white text-3xl"
                        onClick={() => handleTeclaClick(tecla)}
                    >
                        {tecla.text}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Keyboard
