import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [tarefas, setTarefas] = useState([]);

  const addTarefa = novaTarefa => {
    setTarefas(prev => [...prev, novaTarefa])
  }

  const design = {
    style: 'mx-auto my-0 max-w-[1024px] text-slate-800',
    responsive: 'superwide:max-w-[1024px]'
  }

  return (
    <main className={`${design.style} ${design.responsive}`}>
      <TaskForm onAddTarefa={addTarefa}/>
      <TaskList tarefas={tarefas}/>
    </main>
  )
}

export default App
