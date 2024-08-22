import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);
const [menu, setMenu] = useState([
    {
        id: 1,
        img: 'https://www.foodandwine.com/thmb/XE8ubzwObCIgMw7qJ9CsqUZocNM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSG-Smash-Burger-FT-RECIPE0124-d9682401f3554ef683e24311abdf342b.jpg',
        name: 'Smash burger',
        description: 'The burger has a flavorful, crispy exterior while maintaining a tender and juicy center. Typically served with classic toppings like lettuce, tomato, pickles, and cheese.',
        price: 'R150',
    },
    {
        id: 2,
        img: 'https://www.kitchensanctuary.com/wp-content/uploads/2019/09/Buffalo-Wings-square-FS-55.jpg',
        name: 'Buffalo Wings',
        description: 'Buffalo wings are famous for their crispy exterior and tender, juicy meat inside. They come in various heat levels, from mild to extra spicy, catering to a range of taste preferences.',
        price: 'R100',
    },
    {
        id: 3,
        img: 'https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2021/10/roasted-tomato-sauce-portion-800x1200.jpg',
        name: 'Pasta',
        description: 'It comes in numerous shapes and sizes, such as spaghetti, penne, fusilli, and ravioli. Pasta is often cooked by boiling and can be served with a wide range of sauces, from simple tomato-based sauces to rich, creamy Alfredo sauces.',
        price: 'R120',
    },
    {
        id: 4,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0a41wrp2_B_cJjYEc6M0RkK-L9AUvzT8O_g&s',
        name: 'Wrap',
        description: 'They can be a quick and healthy meal or a hearty snack. Wraps are popular for their flexibility, as they can be filled with a variety of ingredients, including meats, vegetables, and sauces.',
        price: 'R100',
    },
    {
        id: 5,
        img: 'https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg', 
        name: 'Pizza',
        description: 'Beloved Italian dish that features a round, flat base of leavened wheat-based dough topped with a variety of ingredients, including tomatoes, cheese, meats, vegetables, and herbs.',
        price: 'R180',
    },
    {
        id: 6,
        img: 'https://www.southernliving.com/thmb/x5xM5QvARl_og39g1jD1N1HfUlA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Extra_Easy_Lasagna_005_16x9-24d8c7469367440bb9aad73e9a83ded9.jpg', 
        name: 'Lasagna',
        description: 'Italian dish is made of stacked layers of lasagna alternating with fillings such as ragù, béchamel sauce, vegetables, cheeses, and seasonings and spices.',
        price: 'R80',
    }
  ]);

const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price.replace('R', '')) * item.quantity, 0).toFixed(2);
  };

  const clearCart = () => {
    setCart([]);
  };


  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
    }
      
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId, quantity) => {
    setCart((prevCart) => {
      return prevCart.map(cartItem =>
        cartItem.id === itemId
          ? { ...cartItem, quantity }
          : cartItem
      );
    });
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, setCart, menu, getTotalPrice, clearCart, addToCart, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);