const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres'
});

const User = require('./user')(sequelize);
const Task = require('./task')(sequelize);

User.hasMany(Task);
Task.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Task
};
