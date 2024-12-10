import { Outlet, Link } from 'react-router-dom' 

import style from './NavBar.module.css'

const NavBar = () =>{
    return(

        <>
            <nav className={style.navbar}>
                <ul className={style.list}>

                    <Link to='/'>
                    <li className={style.item}><img className = {style.logo} src="../../assets/pngwing.com.png"/> </li>
                    </Link>

                    <Link to='/'>
                    <li className={style.item}>HOME</li>
                    </Link>

                    <Link to='/createMaterial'>
                    <li className={style.item}>CADASTRAR NOVO MODELO DE ROUPA</li>
                    </Link>

                    <Link to='listMaterial'>
                    <li className={style.item}>LISTAR ROUPAS</li>
                    </Link>

                </ul>

            </nav>

            <Outlet/>

        </>
    )
}

export default NavBar