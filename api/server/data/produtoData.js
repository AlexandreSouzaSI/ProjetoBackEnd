const database = require('../infra/database');

exports.getProdutos = async function () {
    return database.query('SELECT * FROM produtos');
};

exports.savePost = async function (post) {
    return database.query('INSERT INTO produtos (produto, preço) VALUES ($1, $2) returning *', [post.produto, post.preço]);
};

exports.deletePost = async function (id_produto) {
    return database.query('DELETE FROM produtos where id_produto = $1', [id_produto]);
};

exports.updatePost = function (id_produto, post) {
	return database.query('UPDATE produtos SET produto = $1, preço = $2 where id_produto = $3 returning *', [post.produto, post.preço, id_produto]);
};