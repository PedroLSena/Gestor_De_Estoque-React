import { Outlet, Link, useLocation } from "react-router-dom"

export default function ItemsLayout(){
    const{pathname} = useLocation();
    return(
        <main>
            <h1>Estoque Items</h1>
            <div>
                <Link to="/items" className={`tab, ${pathname === "/items" ? "activa": ""}`}> Todos os Items</Link>
                <Link to="/items/new" className={`tab, ${pathname === "/items/new" ? "activa": ""}`}> Novo Item</Link>
            </div>
            <Outlet/>
        </main>
    )
}