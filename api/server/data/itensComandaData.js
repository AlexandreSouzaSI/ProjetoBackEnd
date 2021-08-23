const database = require('../infra/database');

exports.getItensComanda = async function () {
    return database.query('SELECT * FROM itens_comanda WHERE date_delete is null');
};

exports.saveItensComanda = async function (post) {
    return database.query(`INSERT INTO itens_comanda (id_comanda, id_produto, quantidade, date_create)
                           VALUES ($1, $2, $3, $4) returning *`, 
                           [post.id_comanda, post.id_produto, post.quantidade, post.date_create = new Date()]
                          );
};

exports.deleteItensComanda = async function (post, id_comanda) {
    return database.query(`UPDATE itens_comanda SET date_delete = $1, user_delete = $2, id_produto = $3 WHERE id_comanda = $4`, [post.date_delete = new Date(), post.user_delete, post.id_produto, id_comanda]);
};

exports.updateItensComanda = function (id_comanda, post) {
	return database.query(`UPDATE itens_comanda 
                           SET id_produto = $1, quantidade = $2, date_update = $3 where id_comanda = $4 returning *`, 
                           [post.id_produto, post.quantidade, post.date_update = new Date(), id_comanda]
                          );
};