import style from './Button.module.css'
import { Link } from 'react-router-dom'

const Button = ({label, router, cod_roupa}) => {
    return(
        <div className={style.buttonContainer}>

            <Link to={`${router}${cod_roupa}`}>
                <button>{label}</button>
            </Link>
            
        </div>
    )
}

export default Button