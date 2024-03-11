export const addItemToCart = (cartItems, product) =>{
    const productInCart = cartItems.find(item => item.id ===product.id);

    if(productInCart){
        return cartItems.map(item =>
            item.id === productInCart.id
            ? {...item, quantity: item.quantity + 1} 
            : item // si hay un producto con un id igual al producto en el carrito, se le suma 1 a la cantidad o devuelve el item.
        );
    }

    return [...cartItems, {...product, quantity: 1}] // si no hay un producto con un id igual al producto en el carrito, se agrega el producto al carrito con cantidad 1.

} 

export const removeItemFromCart = (cartItems, id) => {
    const productToRemove = cartItems.find(item => item.id === id);

    if(productToRemove.quantity > 1){
        return cartItems.map(item =>
            item.id === productToRemove.id
            ? {...item, quantity: item.quantity - 1}
            : item
        ); // si la cantidad del producto a remover es mayor a 1, se le resta 1 a la cantidad.
       
    }

    return cartItems.filter(item => item.id !== productToRemove.id); // si la cantidad del producto a remover es igual a 1, se elimina el producto del carrito.
};



