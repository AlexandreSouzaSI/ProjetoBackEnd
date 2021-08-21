const database = require('../infra/database');

exports.getComanda = async function () {
    return database.query('SELECT * FROM comandas');
};

exports.saveComanda = async function (post) {
    return database.query(`INSERT INTO comandas (id_usuario_cadastrado, id_mesa, id_forma_pagamento, preço_total, date_create)
                           VALUES ($1, $2, $3, $4, $5) returning *`, 
                           [post.id_usuario_cadastrado, post.id_mesa, post.id_forma_pagamento, post.preço_total, post.date_create]
                          );
};

exports.deleteComanda = async function (id_comanda) {
    return database.query('DELETE FROM comandas where id_comanda = $1', [id_comanda]);
};

exports.updateComanda = function (id_comanda, post) {
	return database.query(`UPDATE comandas 
                           SET id_usuario_cadastrado = $1, id_mesa = $2, id_forma_pagamento = $3, preço_total = $4, date_update = $5 where id_comanda = $6 returning *`, 
                           [post.id_usuario_cadastrado, post.id_mesa, post.id_forma_pagamento, post.preço_total, post.date_update, id_comanda]
                          );
};