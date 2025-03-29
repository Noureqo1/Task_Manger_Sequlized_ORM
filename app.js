const express = require('express');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

startServer();
