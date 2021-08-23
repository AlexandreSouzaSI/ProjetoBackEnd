const database = require('../infra/database');

exports.getMesa = async function () {
    return database.query('SELECT * FROM mesas WHERE date_delete is null');
};

exports.saveMesa = async function (post) {
    return database.query(`INSERT INTO mesas (numero, date_create)  
                           VALUES ($1, $2) returning *`, 
                           [post.numero, post.date_create = new Date()]
                         );
};

exports.deleteMesa = async function (post, id_mesa) {
    return database.query('UPDATE mesas SET date_delete = $1, user_delete = $2 WHERE id_mesa = $3', [post.date_delete = new Date(), post.user_delete, id_mesa]);
};

exports.updateMesa = function (id_mesa, post) {
	return database.query(`UPDATE mesas SET numero = $1, date_update = $2 where id_mesa = $3 returning *`, 
                           [post.numero, post.date_update = new Date(), id_mesa]
                         );
};