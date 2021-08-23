const itensComandaData = require('../data/itensComandaData');

exports.getItensComanda = function () {
    return itensComandaData.getItensComanda();
};

exports.saveItensComanda = function (post) {
    return itensComandaData.saveItensComanda(post);
};

exports.deleteItensComanda = function (post, id_comanda) {
    return itensComandaData.deleteItensComanda(post, id_comanda);
};

exports.updateItensComanda = function (id_comanda, post) {
	return itensComandaData.updateItensComanda(id_comanda, post);
};