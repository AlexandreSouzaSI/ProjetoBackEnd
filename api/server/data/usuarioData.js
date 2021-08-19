const database = require('../infra/database');

exports.getUsuarios = async function () {
    return database.query('SELECT * FROM usuarios_cadastrados');
};

exports.savePost = async function (post) {
    return database.query(`INSERT INTO usuarios_cadastrados (name, email, telefone, senha, date_create) 
                           VALUES ($1, $2, $3, $4, $5) returning *`, 
                           [post.name, post.email, post.telefone, post.senha, post.date_create]
                         );
};

exports.deletePost = async function (id_usuario_cadastrado) {
    return database.query('DELETE FROM usuarios_cadastrados where id_usuario_cadastrado = $1', [id_usuario_cadastrado]);
};

exports.updatePost = function (id_usuario_cadastrado, post) {
	return database.query(`UPDATE usuarios_cadastrados 
                           SET name = $1, email = $2, telefone = $3, date_update = $4 where id_usuario_cadastrado = $5 returning *`, 
                           [post.name, post.email, post.telefone, post.date_update, id_usuario_cadastrado]
                         );
};