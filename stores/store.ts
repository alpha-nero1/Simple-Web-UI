import { createContext, useContext } from "react";
import CartStore from "./cart-store";

// Define what the store looks like.
interface Store {
    cartStore: CartStore;   
}

// Build our store variable, the SSOT
export const store: Store = {
    cartStore: new CartStore()
}

// Create our store context that will wrap the application.
export const StoreContext = createContext(store);

// Define the 'use' stateful function.
export function useStore() {
    return useContext(StoreContext);
}