import ItemsTable from "../../components/ItemsTable";
import Style from "../../all.module.css";

export default function ListItems(){
    return(
    <>
        <h1 className={Style.ListItemH1Style}>Lista de Comentarios</h1>
        <ItemsTable />
    </>
    )
}