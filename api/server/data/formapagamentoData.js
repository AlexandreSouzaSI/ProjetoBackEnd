const database = require('../infra/database');

exports.getFormapagamento = async function () {
    return database.query('SELECT * FROM forma_pagamento WHERE date_delete is null');
};

exports.saveFormapagamento = async function (post) {
    return database.query(`INSERT INTO forma_pagamento (descrição, date_create) 
                           VALUES ($1, $2) returning *`, 
                           [post.descrição, post.date_create = new Date()]
                         );
};

exports.deleteFormapagamento = async function (post, id_forma_pagamento) {
    return database.query('UPDATE forma_pagamento SET date_delete = $1, user_delete = $2 WHERE id_forma_pagamento = $3', [post.date_delete = new Date(), post.user_delete, id_forma_pagamento]);
};

exports.updaFormapagamento = function (id_forma_pagamento, post) {
	return database.query(`UPDATE forma_pagamento SET descrição = $1, date_update = $2 where id_forma_pagamento = $3 returning *`, 
                           [post.descrição, post.date_update = new Date(), id_forma_pagamento]
                         );
};