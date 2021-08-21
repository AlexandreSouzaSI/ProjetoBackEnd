const database = require('../infra/database');

exports.getFormapagamento = async function () {
    return database.query('SELECT * FROM forma_pagamento');
};

exports.saveFormapagamento = async function (post) {
    return database.query(`INSERT INTO forma_pagamento (descrição, date_create) 
                           VALUES ($1, $2) returning *`, 
                           [post.descrição, post.date_create]
                         );
};

exports.deleteFormapagamento = async function (id_forma_pagamento) {
    return database.query('DELETE FROM forma_pagamento where id_forma_pagamento = $1', [id_forma_pagamento]);
};

exports.updaFormapagamento = function (id_forma_pagamento, post) {
	return database.query(`UPDATE forma_pagamento SET descrição = $1, date_update = $2 where id_forma_pagamento = $3 returning *`, 
                           [post.descrição, post.date_update, id_forma_pagamento]
                         );
};