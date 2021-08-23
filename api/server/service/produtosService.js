const produtoData = require('../data/produtoData')

exports.getProduto = function () {
    return produtoData.getProduto();
};

exports.saveProduto = function (post) {
    return produtoData.saveProduto(post);
};

exports.deleteProduto = function (post, id_produto) {
    return produtoData.deleteProduto(post, id_produto);
};

exports.updateProduto = function (id_produto, post) {
	return produtoData.updateProduto(id_produto, post);
};