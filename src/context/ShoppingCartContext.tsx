import { useContext, createContext, ReactNode, useState, useMemo } from "react";
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

// create a context object for the shopping cart
const shoppingCartContext = createContext({} as shoppingCartContextType);

// custom hook to use the shopping cart context
export const useShoppingCart = () => {
  return useContext(shoppingCartContext);
};

// provider component for the shopping cart context
export const ShoppingCartProvider = ({
  children,
}: shoppingCartProviderProps): JSX.Element => {
  // state for the items in the cart
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // state for whether the cart is currently open or closed
  const [isOpen, setIsOpen] = useState(false);

  // calculate the total quantity of all items in the cart
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

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

  const memoizedValue = useMemo(() => {
    const getItemQuantity = (id: number) => {
      return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    return {
      getItemQuantity,
      increaseCartquantity,
      decreaseCartquantity,
      removeFromCart,
      cartOpen,
      cartClose,
      cartItems,
      cartQuantity,
    };
  }, [cartItems, cartQuantity]);

  return (
    <shoppingCartContext.Provider value={memoizedValue}>
      {children}
      <ShoppingCart isOpen={isOpen} setIsOpen={setIsOpen} />
    </shoppingCartContext.Provider>
  );
};
