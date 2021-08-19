const database = require('../infra/database');

exports.getPedidosGeral = async function () {
    return database.query(`SELECT 
                            name as Nome,
                            numero as Mesa,
                            produto,
                            quantidade,
                            preço,
                            pedidos_produtos2.date_create 
                        FROM pedido_usuario JOIN usuarios_cadastrados ON usuarios_cadastrados.id_usuario_cadastrado = pedido_usuario.id_usuario_cadastrado
                        JOIN pedidos_produtos pedidos_produtos2 ON pedidos_produtos2.id_pedido_usuario = pedido_usuario.id_pedido_usuario
                        JOIN produtos ON produtos.id_produto = pedidos_produtos2.id_produto
                        JOIN mesas ON mesas.id_mesa = pedido_usuario.id_mesa
                        WHERE pedidos_produtos2.id_produto = 7 OR pedidos_produtos2.id_produto = 8
                        ORDER BY date_create`);
                        };

exports.getPedidosBebidas = async function () {
    return database.query(`SELECT 
                            name as Nome,
                            numero as Mesa,
                            produto,
                            quantidade,
                            preço,
                            pedidos_produtos2.date_create 
                        FROM pedido_usuario JOIN usuarios_cadastrados ON usuarios_cadastrados.id_usuario_cadastrado = pedido_usuario.id_usuario_cadastrado
                        JOIN pedidos_produtos pedidos_produtos2 ON pedidos_produtos2.id_pedido_usuario = pedido_usuario.id_pedido_usuario
                        JOIN produtos ON produtos.id_produto = pedidos_produtos2.id_produto
                        JOIN mesas ON mesas.id_mesa = pedido_usuario.id_mesa
                        WHERE pedidos_produtos2.id_produto != 7 AND pedidos_produtos2.id_produto != 8
                        ORDER BY date_create`);
                        };

exports.getTotalApagar = async function () {
    return database.query(`SELECT 
                            name as Nome,
                            SUM(preço * quantidade) as Total
                        FROM pedido_usuario JOIN usuarios_cadastrados ON usuarios_cadastrados.id_usuario_cadastrado = pedido_usuario.id_usuario_cadastrado
                        JOIN pedidos_produtos pedidos_produtos2 ON pedidos_produtos2.id_pedido_usuario = pedido_usuario.id_pedido_usuario
                        JOIN produtos ON produtos.id_produto = pedidos_produtos2.id_produto
                        JOIN mesas ON mesas.id_mesa = pedido_usuario.id_mesa
                        GROUP BY nome
                        ORDER BY nome`);
                        };

exports.getTotalDoDia = async function () {
    return database.query(`SELECT 
                            SUBSTRING(CAST(pedido_usuario.date_create AS varchar), 1, 10) as data_pedido,
                            SUM(preço * quantidade) as Total
                        FROM pedido_usuario JOIN usuarios_cadastrados ON usuarios_cadastrados.id_usuario_cadastrado = pedido_usuario.id_usuario_cadastrado
                        JOIN pedidos_produtos pedidos_produtos2 ON pedidos_produtos2.id_pedido_usuario = pedido_usuario.id_pedido_usuario
                        JOIN produtos ON produtos.id_produto = pedidos_produtos2.id_produto
                        JOIN mesas ON mesas.id_mesa = pedido_usuario.id_mesa
                        GROUP BY data_pedido`);
                        };

exports.getTotalProduto = async function () {
    return database.query(`SELECT 
                            SUBSTRING(CAST(pedido_usuario.date_create AS varchar), 1, 10) as data_pedido,
                            quantidade,
                            produto
                        FROM pedido_usuario JOIN usuarios_cadastrados ON usuarios_cadastrados.id_usuario_cadastrado = pedido_usuario.id_usuario_cadastrado
                        JOIN pedidos_produtos pedidos_produtos2 ON pedidos_produtos2.id_pedido_usuario = pedido_usuario.id_pedido_usuario
                        JOIN produtos ON produtos.id_produto = pedidos_produtos2.id_produto
                        JOIN mesas ON mesas.id_mesa = pedido_usuario.id_mesa
                        WHERE produtos.produto = 'Heineken'
                        GROUP BY  produto, quantidade, data_pedido
                        ORDER BY quantidade DESC`);
                        };