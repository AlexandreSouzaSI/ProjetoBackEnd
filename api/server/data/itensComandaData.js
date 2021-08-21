const database = require('../infra/database');

exports.getItensComanda = async function () {
    return database.query('SELECT * FROM itens_comanda');
};

exports.saveItensComanda = async function (post) {
    return database.query(`INSERT INTO itens_comanda (id_comanda, id_produto, quantidade, date_create)
                           VALUES ($1, $2, $3, $4) returning *`, 
                           [post.id_comanda, post.id_produto, post.quantidade, post.date_create]
                          );
};

exports.deleteItensComanda = async function (id_comanda, id_produto) {
    return database.query('DELETE FROM itens_comanda where id_comanda = $1 OR id_produto = $2', [id_comanda, id_produto]);
};

exports.updateItensComanda = function (id_comanda, post) {
	return database.query(`UPDATE itens_comanda 
                           SET id_comanda = $1, id_produto = $2, quantidade = $3, date_update = $4 where id_comanda = $5 returning *`, 
                           [post.id_comanda, post.id_produto, post.quantidade, post.date_update, id_comanda]
                          );
};