import {Link, Outlet} from 'react-router-dom'

const NavBar = () => {
    return (
        <>
           <nav>
            <div>
                <Link to="/https://www.google.com/">Ola</Link>
            </div>
           </nav>
           <Outlet/>
        </>
    )
}

export default NavBar