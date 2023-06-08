import { Sequelize } from 'sequelize';

const db = new Sequelize('blog', 'root', 'password',{
    host: 'localhost',
    dialect: 'mysql',
    password: '8501'
})

export default db;