const express = require('express');
const cors = require('cors');
const app = express();

const useRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');


app.use(cors());
app.use(express.json());

app.use('/users', useRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
