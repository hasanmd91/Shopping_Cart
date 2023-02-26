import { useContext, createContext, ReactNode, useState } from "react";
import ShoppingCart from "./../components/ShoppingCart";

type shoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type shoppingCartContextType = {
  cartOpen(): void;
  cartClose(): void;
  getItemQuantity: (id: number) => number;
  increaseCartquantity: (id: number) => void;
  decreaseCartquantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const shoppingCartContext = createContext({} as shoppingCartContextType);

export const useShoppingCart = () => {
  return useContext(shoppingCartContext);
};

export const ShoppingCartProvider = ({
  children,
}: shoppingCartProviderProps): JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartquantity = (id: number) => {
    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id) == null) {
        return [...cartItems, { id, quantity: 1 }];
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartquantity = (id: number) => {
    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id)?.quantity === 1) {
        return cartItems.filter((item) => item.id !== id);
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((cartItems) => {
      return cartItems.filter((item) => item.id !== id);
    });
  };

  const cartOpen = () => setIsOpen(true);

  const cartClose = () => setIsOpen(false);

  return (
    <shoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartquantity,
        decreaseCartquantity,
        removeFromCart,
        cartOpen,
        cartClose,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </shoppingCartContext.Provider>
  );
};
