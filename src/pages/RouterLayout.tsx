import { Link,Outlet } from "react-router-dom"
import Style from "../all.module.css"

export default function RouterLayout(){
    return(
        <>
        <div >
            <div className={Style.mainContent}>
                <header className={Style.headerContent}>
                    <nav>
                    <Link className={Style.firstLink} to="/items">Comentarios</Link>
                    <Link className={Style.secondLink} to="/">Início</Link>
                    </nav>
                </header>
                <div className={Style.mainSection}>
                    <div className={Style.genericContent}>
                        <Outlet/>
                    </div>
                </div>
                <hr />
                <footer className={Style.footerContent}>
                    <p className={Style.footerText}>
                        Generic footer
                    </p>
                </footer>

                </div>
        </div>

        </>
    )
}