const database = require('../infra/database');


exports.getUsuario = async function (date_delete) {
    return database.query('SELECT * FROM usuarios_cadastrados WHERE date_delete is null');
};

exports.saveUsuario = async function (post) {
    return database.query(`INSERT INTO usuarios_cadastrados (name, email, telefone, senha, date_create) 
                           VALUES ($1, $2, $3, $4, $5) returning *`, 
                           [post.name, post.email, post.telefone, post.senha , post.date_create = new Date()]
                         );
};

exports.deleteUsuario = async function (post, id_usuario_cadastrado) {
    return database.query('UPDATE usuarios_cadastrados SET date_delete = $1, user_delete = $2 WHERE id_usuario_cadastrado = $3', [post.date_delete = new Date(), post.user_delete, id_usuario_cadastrado]);
};

exports.updateUsuario = function (id_usuario_cadastrado, post) {
	return database.query(`UPDATE usuarios_cadastrados 
                           SET name = $1, email = $2, telefone = $3, date_update = $4 where id_usuario_cadastrado = $5 returning *`, 
                           [post.name, post.email, post.telefone, post.date_update = new Date(), id_usuario_cadastrado]
                         );
};