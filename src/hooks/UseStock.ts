import { useContext } from "react";
import { StockContext } from "../context/Stockcontext"; 

export function useStock() {
    const context = useContext(StockContext);
    if (!context) {
        throw new Error("useStock must be used within a StockContextProvider");
    }
    return context;
}
