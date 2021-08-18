const database = require('../infra/database');

exports.getUsuarios = async function () {
    return database.query('SELECT * FROM usuarios_cadastrados');
};

exports.savePost = async function (post) {
    return database.query('INSERT INTO produtos (produto, preço) VALUES ($1, $2) returning *', [post.produto, post.preço]);
};

exports.deletePost = async function (id) {
    return database.query('DELETE FROM produtos where id = $1', [id]);
};

exports.updatePost = function (id, post) {
	return database.query('UPDATE produtos SET produto = $1, preço = $2 where id = $3', [post.produto, post.preço, id]);
};