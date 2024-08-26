import { Link } from "react-router-dom";
import {useStock} from "../hooks/UseStock.ts";
import DeleteButton from "./DeleteItem.tsx";
import Style from "../all.module.css";
interface Item {
  id: number;
  name: string;
  quantity: number;
  category: string;
}

export default function ItemsTable() {
  const { items }: { items: Item[] } = useStock();

  return (
    <table>
      <thead className={Style.allTable}>
        <tr>
          <th className={Style.eatchItem}>ID</th>
          <th className={Style.eatchItem}>Nome</th>
          <th className={Style.eatchItem}>Quantidade</th>
          <th className={Style.eatchItem}>Empresa</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={Style.allTable}>
            <td className={Style.eatchItem}>{item.id}</td>
            <td className={Style.eatchItem}>{item.name}</td>
            <td className={Style.eatchItem}>{item.quantity} unid.</td>
            <td className={Style.eatchItem}>{item.category}</td>
            <td>
              <Link to={`/items/${item.id}`} className="button is-primary is-small">
                Ver
              </Link>
              <Link to={`/items/${item.id}/update`} className="button is-small">
                Atualizar
              </Link>
             <DeleteButton itemId={item.id} itemName={item.name}/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
