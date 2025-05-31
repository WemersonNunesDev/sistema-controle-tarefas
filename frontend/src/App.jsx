import './App.css'
import TaskForm from './components/TaskForm'

function App() {

  const design = {
    style: 'mx-auto my-0 max-w-[1024px] text-slate-800',
    responsive: 'superwide:max-w-[1024px]'
  }

  return (
    <main className={`${design.style} ${design.responsive}`}>
      <TaskForm />
    </main>
  )
}

export default App
