const mesasData = require('../data/mesasData')

exports.getMesa = function () {
    return mesasData.getMesa();
};

exports.saveMesa = function (post) {
    return mesasData.saveMesa(post);
};

exports.deleteMesa = function (id_mesa) {
    return mesasData.deleteMesa(id_mesa);
};

exports.updateMesa = function (id_mesa, Mesa) {
	return mesasData.updateMesa(id_mesa, Mesa);
};