const {datas, secnddatas, thrddatas, forthdata} = require('../data/Datas');
import {useState, createContext} from 'react';
import {useContext} from 'react';

export const CartContext = createContext();

const allProdects = [...datas, ...secnddatas, ...thrddatas, ...forthdata];

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = productId => {
    const productToAdd = allProdects.find(product => product.id === productId);

    if (productToAdd) {
      const existingItems = cartItems.find(item => item.id === productId);
      if (existingItems) {
        setCartItems(prevCartItems =>
          prevCartItems.map(item =>
            item.id === productId
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        );
      } else {
        setCartItems(prevCartItems => [
          ...prevCartItems,
          {...productToAdd, quantity: 1},
        ]);
      }
    }
  };

  const decreaseQuantity = productId => {
    setCartItems(prevCartItems =>
      prevCartItems
        .map(item =>
          item.id === productId
            ? {...item, quantity: Math.max(item.quantity - 1, 0)}
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  };
  const totalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };
  return (
    <CartContext.Provider
      value={{cartItems, addToCart, decreaseQuantity, totalAmount}}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
