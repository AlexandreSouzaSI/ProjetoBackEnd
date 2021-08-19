const relatoriosData = require('../data/relatoriosData');

exports.getPedidosGeral = function () {
    return relatoriosData.getPedidosGeral();
};

exports.getPedidosBebidas = function () {
    return relatoriosData.getPedidosBebidas();
};

exports.getTotalApagar = function () {
    return relatoriosData.getTotalApagar();
};

exports.getTotalDoDia = function () {
    return relatoriosData.getTotalDoDia();
};

exports.getTotalProduto = function () {
    return relatoriosData.getTotalProduto();
};