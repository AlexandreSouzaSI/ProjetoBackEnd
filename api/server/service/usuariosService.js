const usuarioData = require('../data/usuarioData');

exports.getUsuario = function () {
    return usuarioData.getUsuario();
};

exports.saveUsuario = function (post) {
    return usuarioData.saveUsuario(post);
};

exports.deleteUsuario = function (id_usuario_cadastrado) {
    return usuarioData.deleteUsuario(id_usuario_cadastrado);
};

exports.updateUsuario = function (id_usuario_cadastrado, post) {
	return usuarioData.updateUsuario(id_usuario_cadastrado, post);
};