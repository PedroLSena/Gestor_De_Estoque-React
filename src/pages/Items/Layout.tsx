import { Outlet, Link, useLocation } from "react-router-dom"
import Style from "../../all.module.css";
export default function ItemsLayout(){
    const{pathname} = useLocation();
    return(
        <main>
            <h1 className={Style.feedCommentText}>Feed Comment List</h1>

            <div className={Style.mainContentHome}>

                <span className={Style.fistTxtHome}>
                    <Link  to="/items" className={`${Style.firstTxt}tab, ${pathname === "/items" ? "activa": ""}`}> Todos os Items</Link>
                </span>

                <span className={Style.secondTxtHome}>
                    <Link to="/items/new" className={`${Style.secondTxt}tab, ${pathname === "/items/new" ? "activa": ""}`}> Novo Item</Link>
                    
                </span>

            </div>
            <hr className={Style.firstHr}/>
            <Outlet/>
        </main>
    )
}