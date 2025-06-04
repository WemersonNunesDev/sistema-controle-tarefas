import { useState } from 'react'
import '../index.css'
import Buttons from './Buttons'

export default function TaskForm({ onAddTarefa }) {
    const [tarefa, setTarefa] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarefa.trim()) {
            onAddTarefa(tarefa.trim())
            setTarefa('')
        }
    }

    const formDesign = 'px-1.5 py-2 flex gap-4';
    const inputDesign = 'w-full px-4 py-1 rounded outline focus:outline-blue-500'

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
                    style='w-[249px]'
                    description='Adicionar'
                />
            </form>
        </div>
    )
}