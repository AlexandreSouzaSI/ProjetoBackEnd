const database = require('../infra/database');

exports.getPedidoUsuario = async function () {
    return database.query('SELECT * FROM pedido_usuario');
};

exports.savePost = async function (post) {
    return database.query(`INSERT INTO pedido_usuario (id_usuario_cadastrado, id_mesa, id_forma_pagamento, preço_total, date_create)
                           VALUES ($1, $2, $3, $4, $5) returning *`, 
                           [post.id_usuario_cadastrado, post.id_mesa, post.id_forma_pagamento, post.preço_total, post.date_create]
                          );
};

exports.deletePost = async function (id_pedido_usuario) {
    return database.query('DELETE FROM pedido_usuario where id_pedido_usuario = $1', [id_pedido_usuario]);
};

exports.updatePost = function (id_pedido_usuario, post) {
	return database.query(`UPDATE pedido_usuario 
                           SET id_usuario_cadastrado = $1, id_mesa = $2, id_forma_pagamento = $3, preço_total = $4, date_update = $5 where id_pedido_usuario = $6 returning *`, 
                           [post.id_usuario_cadastrado, post.id_mesa, post.id_forma_pagamento, post.preço_total, post.date_update, id_pedido_usuario]
                          );
};