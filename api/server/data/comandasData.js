const database = require('../infra/database');

exports.getComanda = async function () {
    return database.query('SELECT * FROM comandas WHERE date_delete is null');
};

exports.saveComanda = async function (post) {
    return database.query(`INSERT INTO comandas (id_usuario_cadastrado, id_mesa, id_forma_pagamento, preço_total, taxa_serviço, status_pagamento, date_create)
                           VALUES ($1, $2, $3, $4, $5, $6, $7) returning *`, 
                           [post.id_usuario_cadastrado, post.id_mesa, post.id_forma_pagamento, post.preço_total = 0, post.taxa_serviço, post.status_pagamento, post.date_create = new Date()]
                          );
};

exports.deleteComanda = async function (post, id_comanda) {
    return database.query(`UPDATE comandas SET date_delete = $1, user_delete = $2 WHERE id_comanda = $3 AND preço_total = 0 AND status_pagamento = 'Pago'`, [post.date_delete = new Date(), post.user_delete, id_comanda]);
};

exports.updateComanda = function (id_comanda, post) {
	return database.query(`UPDATE comandas 
                           SET id_usuario_cadastrado = $1, id_mesa = $2, id_forma_pagamento = $3, preço_total = $4, date_update = $5 where id_comanda = $6 returning *`, 
                           [post.id_usuario_cadastrado, post.id_mesa, post.id_forma_pagamento, post.preço_total, post.date_update = new Date(), id_comanda]
                          );
};