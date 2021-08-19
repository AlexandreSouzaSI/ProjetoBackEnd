const usuarioData = require('../data/usuarioData');

exports.getUsuarios = function () {
    return usuarioData.getUsuarios();
};

exports.savePost = function (post) {
    return usuarioData.savePost(post);
};

exports.deletePost = function (id_usuario_cadastrado) {
    return usuarioData.deletePost(id_usuario_cadastrado);
};

exports.updatePost = function (id_usuario_cadastrado, post) {
	return usuarioData.updatePost(id_usuario_cadastrado, post);
};