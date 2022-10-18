import { getStoredCart } from '../utilities/fakedb';

const productAndCartLoaders = async () => {
    //Get Products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //Get Cart
    const savedCart = getStoredCart();
    const initialCart = []
    for (const id in savedCart) {
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct)
        }
    }
    return {products, initialCart};
};

export default productAndCartLoaders;