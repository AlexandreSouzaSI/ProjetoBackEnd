const usuarioData = require('../data/usuarioData');

exports.getUsuarios = function () {
    return usuarioData.getUsuarios();
};

exports.savePost = function (post) {
    return usuarioData.savePost(post);
};

exports.deletePost = function (id) {
    return usuarioData.deletePost(id);
};

exports.updatePost = function (id, post) {
	return usuarioData.updatePost(id, post);
};