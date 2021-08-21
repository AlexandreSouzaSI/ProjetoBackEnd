const database = require('../infra/database');

exports.getMesa = async function () {
    return database.query('SELECT * FROM mesas');
};

exports.saveMesa = async function (post) {
    return database.query(`INSERT INTO mesas (numero, date_create)  
                           VALUES ($1, $2) returning *`, 
                           [post.numero, post.date_create]
                         );
};

exports.deleteMesa = async function (id_mesa) {
    return database.query('DELETE FROM mesas where id_mesa = $1', [id_mesa]);
};

exports.updateMesa = function (id_mesa, post) {
	return database.query(`UPDATE mesas SET numero = $1, date_update = $2 where id_mesa = $3 returning *`, 
                           [post.numero, post.date_update, id_mesa]
                         );
};