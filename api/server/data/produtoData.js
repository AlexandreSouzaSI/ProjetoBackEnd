const database = require('../infra/database');

exports.getProduto = async function () {
    return database.query('SELECT * FROM produtos');
};

exports.saveProduto = async function (post) {
    return database.query(`INSERT INTO produtos (produto, preço, date_create) VALUES ($1, $2, $3) returning *`, 
                           [post.produto, post.preço, post.date_create]
                         );
};

exports.deleteProduto = async function (id_produto) {
    return database.query('DELETE FROM produtos where id_produto = $1', [id_produto]);
};

exports.updateProduto = function (id_produto, post) {
	return database.query(`UPDATE produtos 
                           SET produto = $1, preço = $2, date_update = $3 where id_produto = $4 returning *`, 
                           [post.produto, post.preço, post.date_update, id_produto]
                         );
};