const database = require('../infra/database');

exports.getProduto = async function () {
    return database.query('SELECT * FROM produtos WHERE date_delete is null');
};

exports.saveProduto = async function (post) {
    return database.query(`INSERT INTO produtos (produto, preço, date_create) VALUES ($1, $2, $3) returning *`, 
                           [post.produto, post.preço, post.date_create = new Date()]
                         );
};

exports.deleteProduto = async function (post, id_produto) {
    return database.query('UPDATE produtos SET date_delete = $1, user_delete = $2 WHERE id_produto = $3', [post.date_delete = new Date(), post.user_delete, id_produto]);
};

exports.updateProduto = function (id_produto, post) {
	return database.query(`UPDATE produtos 
                           SET produto = $1, preço = $2, date_update = $3 where id_produto = $4 returning *`, 
                           [post.produto, post.preço, post.date_update = new Date(), id_produto]
                         );
};