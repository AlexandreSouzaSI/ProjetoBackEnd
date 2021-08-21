const itensComandaData = require('../data/itensComandaData');

exports.getItensComanda = function () {
    return itensComandaData.getItensComanda();
};

exports.saveItensComanda = function (post) {
    return itensComandaData.saveItensComanda(post);
};

exports.deleteItensComanda = function (id_comanda, id_produto) {
    return itensComandaData.deleteItensComanda(id_comanda, id_produto);
};

exports.updateItensComanda = function (id_comanda, id_produto, post) {
	return itensComandaData.updateItensComanda(id_comanda, id_produto, post);
};