import { useContext, createContext, ReactNode } from "react";

type shoppingCartProviderProps = {
  children: ReactNode;
};

const shoppingCartContext = createContext({});

export const useShoppingCart = () => {
  return useContext(shoppingCartContext);
};

export const ShoppingCartProvider = ({
  children,
}: shoppingCartProviderProps): JSX.Element => {
  return (
    <shoppingCartContext.Provider value={{}}>
      {children}
    </shoppingCartContext.Provider>
  );
};
