import { useParams } from "react-router-dom";
import ItemForm from "../../components/ItemForm"
import { useStock } from "../../hooks/UseStock";

export default function UpdateItems() {
    const { getItem } = useStock();
    const { id } = useParams<{ id: string }>();

    const itemId = Number(id);
    const item = getItem(itemId);

    if (!item) {
        return <p>Item não encontrado</p>;
    }

    return (
        <>
            <h1>Update Item</h1>
            <ItemForm itemToUpdate={item} />
        </>
    );
}