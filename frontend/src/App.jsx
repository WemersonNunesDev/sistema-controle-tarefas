import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Modal from './components/Modal'
import Buttons from './components/Buttons'

const ROAD = 'http://localhost:5050/api/tasks';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [showModalExcluir, setShowModalExcluir] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState(null);
  const [editarTitulo, setEditarTitulo] = useState('');
  const [editarDescricao, setEditarDescricao] = useState('');

  useEffect(() => {
    buscarTarefas();
  }, []);

  const buscarTarefas = () => {
    axios.get(ROAD)
      .then(res => setTarefas(res.data))
      .catch(err => console.error(`Erro ao buscar tarefas: ${err}`))
  };

  const addTarefa = titulo => {
    axios.post(ROAD, {
      title: titulo,
      description: ''
    })
      .then(() => buscarTarefas())
      .catch(err => console.error(`Erro ao adicionar tarefa: ${err}`))
  };

  const marcarComoFeita = id => {
    axios.put(`${ROAD}/${id}`, { done: true })
      .then(() => buscarTarefas())
      .catch(err => console.error(`Erro ao marcar como feita: ${err}`))
  }

  const abrirModalExcluir = tarefa => {
    setTarefaSelecionada(tarefa);
    setShowModalExcluir(true);
  }

  const confirmarExcluir = () => {
    axios.delete(`${ROAD}/${tarefaSelecionada.id}`)
      .then(() => {
        buscarTarefas();
        setShowModalExcluir(false);
        setTarefaSelecionada(null);
      })
      .catch(err => console.error(`Erro ao apagar tarefa: ${err}`))
  }

  const abrirModalEditar = tarefa => {
    setTarefaSelecionada(tarefa);
    setEditarTitulo(tarefa.title);
    setEditarDescricao(tarefa.description || '');
    setShowModalEditar(true);
  }

  const confirmarEditar = () => {
    axios.put(`${ROAD}/${tarefaSelecionada.id}`, {
      title: editarTitulo,
      description: editarDescricao,
    })
      .then(() => {
        buscarTarefas();
        setShowModalEditar(false);
        setTarefaSelecionada(null);
      })
      .catch(err => console.error(`Erro ao editar tarefa: ${err}`))
  }

  const design = {
    style: 'mx-auto my-0 text-slate-800',
    responsive: 'xl:max-w-[1024px] lg:max-w-[820px] md:max-w-[614.4px]'
  }

  return (
    <main className={`${design.style} ${design.responsive}`}>
      <TaskForm onAddTarefa={addTarefa}/>
      <TaskList 
        tarefas={tarefas} 
        marcarComoFeita={marcarComoFeita}
        abrirModalExcluir={abrirModalExcluir}
        abrirModalEditar={abrirModalEditar}
      />

      {/* Modal excluir */}
      <Modal show={showModalExcluir} onClose={() => setShowModalExcluir(false)}>
        <h2 className='text-lg text-gray-900 font-semibold'>Confirmar exclusão?</h2>
        <p>Tem certeza que deseja apagar a tarfea <strong className='capitalize'>{tarefaSelecionada?.title}</strong>?</p>

        <div className='flex justify-end gap-4 mt-4'>
          <Buttons 
            description='Não'
            design='alert'
            onAcao={() => {
              setShowModalExcluir(false);
              setTarefaSelecionada(null)
            }}
          />
          <button
            onClick={confirmarExcluir}
            className='bg-transparent outline-2 outline-red-500 text-red-500 text-base font-semibold px-1.5 rounded cursor-pointer'
          >
            Sim
          </button>
          {/* <Buttons
            description='Sim'
            design='alert'
            style='bg-transparent outline-1 outline-red-500 text-red-500'
            onAcao={confirmarExcluir}
          /> */}
        </div>
      </Modal>

       {/* Modal Editar */}
      <Modal show={showModalEditar} onClose={() => setShowModalEditar(false)}>
        <h2 className="text-xl font-bold mb-4">Editar Tarefa</h2>
        <label className="block mb-2 font-semibold">Título:</label>
        <input
          type="text"
          value={editarTitulo}
          onChange={e => setEditarTitulo(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        />
        <label className="block mb-2 font-semibold">Descrição:</label>
        <textarea
          value={editarDescricao}
          onChange={e => setEditarDescricao(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
          rows={4}
        />
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 text-sm text-slate-50 font-semibold bg-gray-400 rounded hover:bg-gray-300 cursor-pointer"
            onClick={() => setShowModalEditar(false)}
          >Cancelar</button>
          <button
            className="px-4 py-2 bg-blue-500 text-slate-50 font-semibold rounded hover:bg-blue-400"
            onClick={confirmarEditar}
          >Salvar</button>
        </div>
      </Modal>
    </main>
  )
}

export default App
