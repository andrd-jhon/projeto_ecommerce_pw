import React from 'react'

import style from './ContainerRoupas.module.css'

const ContainerRoupas = (props) => {
    return (
        <div className={style.container_material}>
            {props.children}
        </div>
    )
}

export default ContainerRoupas