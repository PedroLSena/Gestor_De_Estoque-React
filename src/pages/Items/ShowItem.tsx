import { useParams } from "react-router-dom";
import { useStock } from "../../hooks/UseStock"

export default function ShowItems(){
    const {getItem} = useStock();
    const {id} = useParams<({id:string})>();

    const itemId = Number(id)
    const item = getItem(itemId);

    return(
<div className="item">
            <h2>{item?.name}</h2>
            <p>Quantidade: {item?.quantity}</p>
            <p>Quando foi criado: {item?.createdAt?.toLocaleDateString()}</p>
            <p>Quando foi atualizado: {item?.updatedAt?.toLocaleDateString()}</p>
        </div>
    )
}