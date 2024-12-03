create database ecommerce_jhon_store;

use ecommerce_jhon_store;

CREATE TABLE tbl_produtos (
    produto_id INT AUTO_INCREMENT PRIMARY KEY,
    produto_nome VARCHAR(200) NOT NULL,
    produto_preco VARCHAR(200) NOT NULL
);

select * from tbl_produtos;
ALTER TABLE tbl_produtos
MODIFY COLUMN produto_preco INT NOT NULL;
insert into tbl_produtos (produto_nome, produto_preco) values ("produto teste", 10);