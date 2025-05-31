import { useState, useEffect } from 'react'
import '../index.css'
import Buttons from './Buttons'

export default function TaskForm() {
    const [tarefa, setTarefa] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Tarefa ${tarefa} salva`)

        setTarefa('')
    }

    const formDesign = 'px-1.5 py-2 grid grid-cols-[40dvw_10dvw] gap-4';
    const inputDesign = 'px-4 py-1 rounded outline focus:outline-blue-500'

    return (
        <div className='mt-7'>
            <h1 className='font-semibold text-4xl px-1.5 mb-8'>Sistema de Controle de Tárefas</h1>
            <form onSubmit={handleSubmit} className={`${formDesign}`}>
                <input
                    type="text"
                    placeholder='Insira a tarefa'
                    value={tarefa}
                    onChange={e => setTarefa(e.target.value)}
                    onKeyDown={e => {
                        if(e.key === 'enter') {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }}
                    className={`${inputDesign}`}
                />
                <Buttons
                    type='submit'
                    design='primary'
                    description='Salvar'
                />
            </form>
        </div>
    )
}