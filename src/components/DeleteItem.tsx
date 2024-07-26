import React from "react";
import { useStock } from "../hooks/UseStock";

interface DeleteButtonProps {
    itemName: string;
    itemId: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ itemId, itemName }) => {
    const { deleteItem } = useStock();

    const handleDelete = () => {
        if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
            deleteItem(itemId);
        }
    };

    return (
        <button
            className="button is-danger is-small"
            onClick={handleDelete}
        >
            Excluir
        </button>
    );
};

export default DeleteButton;
