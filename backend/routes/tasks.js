const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /tasks - Listar todas as tarefas
router.get('/', async (req, res) => {
    const tasks = await prisma.task.findMany({
        orderBy: { createdAt: 'desc' },
    });
    res.json(tasks);
});

// POST /tasks - Criar nova tarefa
router.post('/', async(req, res) => {
    const { title, description } = req.body;
    const newTask = await prisma.task.create({
        data: { title, description },
    });
    res.status(201).json(newTask);
});


// PUT /tasks/:id - Atualizar tarefa (ex: marcar como feita)
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, done } = req.body;

    try {
        const updated = await prisma.task.update({
            where: { id: Number(id) },
            data: { title, description, done },
        });

        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar tarefa.' })
    }
});

// DELETE /tasks/:id - Excluir tarefa
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.task.delete({
            where: { id: Number(id) },
        });

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar tarefa.' })
    }
})

module.exports = router;
