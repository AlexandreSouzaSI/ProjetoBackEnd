const mesasData = require('../data/mesasData')

exports.getMesas = function () {
    return mesasData.getMesas();
};

exports.savePost = function (post) {
    return mesasData.savePost(post);
};

exports.deletePost = function (id_mesa) {
    return mesasData.deletePost(id_mesa);
};

exports.updatePost = function (id_mesa, post) {
	return mesasData.updatePost(id_mesa, post);
};