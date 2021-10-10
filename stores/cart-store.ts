import { makeAutoObservable } from "mobx";
import { Product } from "../components/products/product";

// These functions allow us to persist the cart in the browser.
const loadCartToLocalStorage = (items: Map<number, Product[]>, count: number) => {
    if (typeof window === 'undefined') return;
    const obj: any = {}
    items.forEach(item => {
        if (!item?.length) return;
        obj[`cartitem-${item[0].id}`] = item;
    });
    localStorage.setItem('cart', JSON.stringify(obj));
    localStorage.setItem('cartCount', '' + count);
}

const getCartFromLocalStorage = () => {
    if (typeof window === 'undefined') return new Map();
    const stringObj = localStorage.getItem('cart');
    const map = new Map<number, Product[]>();
    if (!stringObj) return map;
    const obj = JSON.parse(stringObj);
    Object.values(obj).forEach((value: any) => {
        if (!value.length) return;
        map.set(value[0].id, value);
    });
    return map;
}

const getCartCountFromLocalStorage = () => {
    if (typeof window === 'undefined') return 0;
    const val: any = localStorage.getItem('cartCount');
    return val ? +val : 0;
}

export default class CartStore {
    
    // Cart items are a mapping of product ids
    // to quantity of that product.
    items = getCartFromLocalStorage();
    // Count of items in cart, saves form calculating on each render.
    count = getCartCountFromLocalStorage();
    
    constructor() { makeAutoObservable(this) }

    addProduct(prod: Product) {
        const items = this.items.get(prod.id)
        if (!items) this.items.set(prod.id, []);
        // - Add the item.
        this.items.get(prod.id)?.push(prod);
        // - Increment count.
        this.count += 1;
        // - Sync local storage.
        loadCartToLocalStorage(this.items, this.count);
        // - Re-boot the instance!
        this.items = new Map(this.items);
    }

    removeProduct(id: number) {
        const items = this.items.get(id)
        if (!items) return;
        items.pop();
        this.count -= 1;
        this.items.set(id, items!);
        loadCartToLocalStorage(this.items, this.count);
        // Re-boot the instance!
        this.items = new Map(this.items);
    }
}