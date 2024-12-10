import React from "react";
import { useState, useEffect } from "react"
import style from './ListRoupas.module.css'
import CardRoupa from "../CardRoupa"

import ContainerMaterial from "../layout/ContainerRoupas";

import Container from '../layout/Container'

const ListRoupas = () => {

    const [roupas, setRoupas] = useState([])

    useEffect(() => {

        fetch('http://localhost:3000/teste', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Acess-Control-Allow-Origin': '*',
                'Acess-Control-Allow-Headers': '*'
            },
        })
    .then((resp)=>resp.json())
    .then((data)=>{
        console.log('MATERIAL: ' + data.data)
        setRoupas(data.data)
        console.log('STATE: ' + materiais)
    })
    .catch((err)=> {console.log(err)})
    },[])

    return (

        <Container>

            <h1 className={style.title}>TODOS OS PRODUTOS</h1>

            <section className={style.list_material}>
                
                    <ContainerMaterial>
                        {
                            roupas.map((roupa)=>(
                                <CardRoupa

                                    nome={roupa.produto_nome}
                                    preco={roupa.produto_preco}
                                    imagem={imagem}
                                    cod_roupa={roupa.produto_id}
                                    key={material.cod_material}

                                    // CONTINUAR DAQUI

                                />
                            ))
                        }    
                    </ContainerMaterial>     

            </section>

        </Container>
    )
}

export default ListRoupas