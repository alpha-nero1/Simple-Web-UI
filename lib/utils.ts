export function prefillArray(count: number, item = null) {
    const arr: any[] = [];
    for (let i = 0; i < count; i++) {
        arr.push(item);
    }
    return arr;
}

export function getRandomProductImage(id: number = 0): string {
    const products = ['camera', 'keyboard', 'monitor', 'iphone'];
    const chosenProduct = products[id % products.length];
    return `product-${chosenProduct}.jpg`
}