import React, { createContext, useState, ReactNode } from "react";
import PropTypes from "prop-types";

export const StockContext = createContext<{
    items: Item[];
    addItem: (item: Item) => void;
    deleteItem: (itemId: number) => void;
    updateItem: (itemId: number, updatedItem: Item) => void;
    getItem: (itemId: number) => Item | undefined;
} | null>(null);

interface Item {
    id: number;
    name: string;
    description: string;
    quantity: number;
    price: number;
    category: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface StockContextProviderProps {
    children: ReactNode;
}

export function StockContextProvider({ children }: StockContextProviderProps) {
    const [items, setItems] = useState<Item[]>(() => {
        const storageItems = localStorage.getItem("obc-react-stock");
        if (!storageItems) return [];
        const items = JSON.parse(storageItems);
        items.forEach((item: any) => {
            item.createdAt = new Date(item.createdAt);
            item.updatedAt = new Date(item.updatedAt);
        });

        return items;
    });

    const addItem = (item: Item) => {
        setItems((currentState) => {
            const updatedItems = [item, ...currentState];
            localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const deleteItem = (itemId: number) => {
        setItems((currentState) => {
            const updatedItems = currentState.filter(item => item.id !== itemId);
            localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const updateItem = (itemId: number, updatedItem: Item) => {
        setItems((currentState) => {
            const updatedItems = currentState.map(item =>
                item.id === itemId ? { ...item, ...updatedItem, updatedAt: new Date() } : item
            );
            localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const getItem = (itemId: number): Item | undefined => {
        return items.find(item => item.id === itemId);
    };

    const stock = {
        items,
        addItem,
        deleteItem,
        updateItem,
        getItem,
    };

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    );
}

StockContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
