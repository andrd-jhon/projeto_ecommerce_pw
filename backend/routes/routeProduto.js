const express = require('express')
const router = express.Router()
const produtoModel = require('../model/produtoModel')

router.get('/', (req, res)=>{

    return res.status(200).json({status:'TESTE DE CONEXÃO COM A API!'});

});


router.get('/produtos', (req, res) => {
    // res.status(200).json(users)

    produtoModel.findAll(/*{where:{userEmail: "joao3@gmail.com"}}*/)
    .then(
        (response) => {
            return res.status(201).json(
                {
                    errorStatus:false,
                    mensageStatus:'PRODUTOS LISTADOS COM SUCESSO',
                    data:response
                }
            )
        }
    )
    .catch((error)=>{
        return res.status(400).json(
            {
                errorStatus:true,
                mensageStatus:'HOUVE UM ERRO AO LISTAR OS PRODUTOS',
                errorObject:error
            }
        );
    });
})

module.exports = router
