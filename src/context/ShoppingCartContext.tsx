import { useContext, createContext, ReactNode, useState } from "react";
import ShoppingCart from "./../components/ShoppingCart";

type shoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  qunatity: number;
};

type shoppingCartContextType = {
  cartOpen(): void;
  cartClose(): void;
  getItemQuantity: (id: number) => number;
  increaseCartquantity: (id: number) => void;
  decreaseCartquantity: (id: number) => void;
  reamoveFromCart: (id: number) => void;
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
    (quantity, item) => item.qunatity + quantity,
    0
  );

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qunatity || 0;
  };

  const increaseCartquantity = (id: number) => {
    setCartItems((cartItems) => {
      if (cartItems.find((item) => item.id === id) == null) {
        return [...cartItems, { id, qunatity: 1 }];
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qunatity: item.qunatity + 1,
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
      if (cartItems.find((item) => item.id === id)?.qunatity === 1) {
        return cartItems.filter((item) => item.id !== id);
      } else {
        return cartItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              qunatity: item.qunatity - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const reamoveFromCart = (id: number) => {
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
        reamoveFromCart,
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
