const Sequelize = require('sequelize');

const connection = require('../config/database');

const produtoModel = connection.define(
    'tbl_produtos',
    {
        produto_id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        produto_nome:{
            type:Sequelize.STRING(200),
            allowNull:false
        },
        produto_preco:{
            type:Sequelize.INTEGER,
            allowNull:false
        }
    },
    {
        timestamps: false
    }
);

// modeLivro.sync({force:true});

module.exports = produtoModel;