import '../index.css'
import Buttons from './Buttons';

export default function TaskList({ tarefas, marcarComoFeita, abrirModalExcluir, abrirModalEditar }) {
    const tdStyle = 'lg:text-base md:text-sm'
    const thStyle = 'lg:text-xl md:text-sm'

    if (tarefas.length === 0) return <p className='pl-1 mt-8'>Nenhuma tarefa adicionada</p>;

    return (
        <table className='w-full border-collapse mt-8'>
            <thead>
                <tr className='text-left'>
                    <th className={`${thStyle} pl-1`}>#</th>
                    <th className={`${thStyle}`}>Tarefa</th>
                    <th className={`${thStyle}`}>Status</th>
                    <th className={`${thStyle}`}>Data</th>
                    <th className={`${thStyle}`}>Opções</th>
                </tr>
            </thead>
            <tbody className='mt-10'>
                {tarefas.slice().reverse().map((tarefa, index) => (
                    <tr key={tarefa.id} className='capitalize border-t-1 pt-2 pl-1 mb-2'>
                        <td className={`${tdStyle} pl-1`}>{index + 1}</td>
                        <td className={`${tdStyle} capitalize`}>{tarefa.title}</td>
                        <td className={`${tdStyle}`}>{tarefa.done ? 'Feito' : 'Pendente'}</td>
                        <td className={`${tdStyle}`}>{new Date(tarefa.createdAt).toLocaleDateString()}</td>
                        <td className={`${tdStyle} py-2 flex gap-2`}>
                            {!tarefa.done && (
                                <Buttons 
                                    description='Concluir'
                                    design='primary'
                                    onAcao={() => marcarComoFeita(tarefa.id)}
                                />
                            )}
                            <Buttons 
                                description='Editar'
                                onAcao={() => abrirModalEditar(tarefa)}
                            />
                            <Buttons 
                                description='Apagar'
                                design='alert'
                                onAcao={() => abrirModalExcluir(tarefa)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}