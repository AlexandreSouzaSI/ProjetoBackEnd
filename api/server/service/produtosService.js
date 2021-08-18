const produtoData = require('../data/produtoData')

exports.getProdutos = function () {
    return produtoData.getProdutos();
};

exports.savePost = function (post) {
    return produtoData.savePost(post);
};

exports.deletePost = function (id_produto) {
    return produtoData.deletePost(id_produto);
};

exports.updatePost = function (id_produto, post) {
	return produtoData.updatePost(id_produto, post);
};