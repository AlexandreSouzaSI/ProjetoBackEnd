const pedidoprodutoData = require('../data/pedidoprodutoData');

exports.getPedidoProduto = function () {
    return pedidoprodutoData.getPedidoProduto();
};

exports.savePost = function (post) {
    return pedidoprodutoData.savePost(post);
};

exports.deletePost = function (id_pedido_usuario, id_produto) {
    return pedidoprodutoData.deletePost(id_pedido_usuario, id_produto);
};

exports.updatePost = function (id_pedido_usuario, id_produto, post) {
	return pedidoprodutoData.updatePost(id_pedido_usuario, id_produto, post);
};