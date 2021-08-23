const database = require('../infra/database');

exports.getPedidosGeral = async function () {
    return database.query(`SELECT 
                            name as Nome,
                            numero as Mesa,
                            produto,
                            quantidade,
                            preço,
                            itens_comanda2.date_create 
                        FROM comandas JOIN usuarios_cadastrados ON usuarios_cadastrados.id_usuario_cadastrado = comandas.id_usuario_cadastrado
                        JOIN itens_comanda itens_comanda2 ON itens_comanda2.id_comanda = comandas.id_comanda
                        JOIN produtos ON produtos.id_produto = itens_comanda2.id_produto
                        JOIN mesas ON mesas.id_mesa = comandas.id_mesa
                        WHERE itens_comanda2.id_produto != 2 AND itens_comanda2.id_produto != 5
                        ORDER BY date_create`);
                        };

exports.getPedidosBebidas = async function () {
    return database.query(`SELECT 
                            name as Nome,
                            numero as Mesa,
                            produto,
                            quantidade,
                            preço,
                            itens_comanda2.date_create 
                        FROM comandas JOIN usuarios_cadastrados ON usuarios_cadastrados.id_usuario_cadastrado = comandas.id_usuario_cadastrado
                        JOIN itens_comanda itens_comanda2 ON itens_comanda2.id_comanda = comandas.id_comanda
                        JOIN produtos ON produtos.id_produto = itens_comanda2.id_produto
                        JOIN mesas ON mesas.id_mesa = comandas.id_mesa
                        WHERE itens_comanda2.id_produto = 2 OR itens_comanda2.id_produto = 5
                        ORDER BY date_create`);
                        };

exports.getTotalApagar = async function () {
    return database.query(`SELECT 
                            name as Nome,
                            SUM(preço * quantidade) as Total
                        FROM comandas JOIN usuarios_cadastrados ON usuarios_cadastrados.id_usuario_cadastrado = comandas.id_usuario_cadastrado
                        JOIN itens_comanda itens_comanda2 ON itens_comanda2.id_comanda = comandas.id_comanda
                        JOIN produtos ON produtos.id_produto = itens_comanda2.id_produto
                        JOIN mesas ON mesas.id_mesa = comandas.id_mesa
                        GROUP BY nome
                        ORDER BY nome`);
                        };

exports.getTotalDoDia = async function () {
    return database.query(`SELECT 
                            SUBSTRING(CAST(comandas.date_create AS varchar), 1, 10) as data_pedido,
                            SUM(preço * quantidade) as Total
                        FROM comandas JOIN usuarios_cadastrados ON usuarios_cadastrados.id_usuario_cadastrado = comandas.id_usuario_cadastrado
                        JOIN itens_comanda itens_comanda2 ON itens_comanda2.id_comanda = comandas.id_comanda
                        JOIN produtos ON produtos.id_produto = itens_comanda2.id_produto
                        JOIN mesas ON mesas.id_mesa = comandas.id_mesa
                        GROUP BY data_pedido`);
                        };

exports.getTotalProduto = async function () {
    return database.query(`SELECT 
                            SUBSTRING(CAST(comandas.date_create AS varchar), 1, 10) as data_pedido,
                            quantidade,
                            produto
                        FROM comandas JOIN usuarios_cadastrados ON usuarios_cadastrados.id_usuario_cadastrado = comandas.id_usuario_cadastrado
                        JOIN itens_comanda itens_comanda2 ON itens_comanda2.id_comanda = comandas.id_comanda
                        JOIN produtos ON produtos.id_produto = itens_comanda2.id_produto
                        JOIN mesas ON mesas.id_mesa = comandas.id_mesa
                        WHERE produtos.produto = 'Heineken'
                        GROUP BY  produto, quantidade, data_pedido
                        ORDER BY quantidade DESC`);
                        };