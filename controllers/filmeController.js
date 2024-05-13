import database from '../config/db_connector.js'


const getTodos = async function(req, res) {
    const result = await database.query('select * from filme order by id');
    res.send(result.rows);
}


export {getTodos};