import { Sequelize } from 'sequelize';

const db = new Sequelize('blog', 'root', 'password',{
    host: 'localhost',
    dialect: 'mysql',
    password: 'gap08501250'
})

export default db;