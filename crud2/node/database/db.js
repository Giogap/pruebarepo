import {sequelize} from 'sequelize';

const db = new sequelize('blog', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

export default db;