const express = require('express');
const cors = require('cors');
const PORT = 3001;
const app = express();

const useRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');


app.use(cors());
app.use(express.json());

app.use('/users', useRoutes);
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
