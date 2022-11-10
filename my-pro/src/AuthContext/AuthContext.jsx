import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const Login = () => {
    setisAuth(false);
  };

  const Logout = () => {
    setisAuth(true);
  };

  const setProduct = (data) => {
    setCart([...cart, data]);
  };

  const totalPrice = (price) => {
    setTotal(total + price);
  };

  const value = {
    isAuth,
    cart,
    total,
    Login,
    Logout,
    setProduct,
    totalPrice,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
