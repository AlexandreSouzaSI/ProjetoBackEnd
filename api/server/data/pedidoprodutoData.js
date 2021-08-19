const database = require('../infra/database');

exports.getPedidoProduto = async function () {
    return database.query('SELECT * FROM pedidos_produtos');
};

exports.savePost = async function (post) {
    return database.query(`INSERT INTO pedidos_produtos (id_pedido_usuario, id_produto, quantidade, date_create)
                           VALUES ($1, $2, $3, $4) returning *`, 
                           [post.id_pedido_usuario, post.id_produto, post.quantidade, post.date_create]
                          );
};

exports.deletePost = async function (id_pedido_usuario, id_produto) {
    return database.query('DELETE FROM pedidos_produtos where id_pedido_usuario = $1 OR id_produto = $2', [id_pedido_usuario, id_produto]);
};

exports.updatePost = function (id_pedido_usuario, post) {
	return database.query(`UPDATE pedidos_produtos 
                           SET id_pedido_usuario = $1, id_produto = $2, quantidade = $3, date_update = $4 where id_pedido_usuario = $5 returning *`, 
                           [post.id_pedido_usuario, post.id_produto, post.quantidade, post.date_update, id_pedido_usuario]
                          );
};