import { Link,Outlet } from "react-router-dom"
import Style from "../all.module.css"

export default function RouterLayout(){
    return(
        <>
        <div className={Style.mainContent}>
        <header>
            <nav>
            <Link to="/items">Items</Link><span>|</span>
            <Link to="/">Inicio</Link>
            </nav>
        </header>
        <hr />
        <div className={Style.mainSection}>
            <Outlet/>
        </div>
        <hr />
        <footer>
            Generic footer
        </footer>

        </div>
        </>
    )
}