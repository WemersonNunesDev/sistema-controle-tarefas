const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /users
router.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});


// PST /users
router.post('/', async (req, res) => {
    const { name, age } = req.body;
    const newUser = await prisma.user.create({
        data: { name, age: Number(age) }
    });
    res.status(201).json(newUser);
});

module.exports = router;
