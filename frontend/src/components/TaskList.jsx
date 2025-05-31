import '../index.css'

export default function TaskList({ tarefas }) {
    return (
        <article className='px-1.5'>
            <ul className='mt-10'>
                {tarefas.length === 0 && <li>Nenhuma tarefa adicionada</li>}
                {tarefas.map((tarefa, index) => (
                    <li key={index} className='capitalize'>
                        {index + 1}. {tarefa}
                    </li>
                ))}
            </ul>
        </article>
    )
}