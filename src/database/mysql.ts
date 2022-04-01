import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'dbvicam',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

// sequelize.authenticate().then(() => {
//     console.log("conexión DB ok");
// }).catch(error => {
//     console.log("error:",error);
// });

export default sequelize;