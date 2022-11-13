import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(true);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [users, setUsers] = useState(null);
  const [query, setqueery] = useState("");

  const Login = () => {
    setisAuth(false);
  };

  const Logout = () => {
    setisAuth(true);
  };

  const setProduct = (data) => {
    setCart([...cart, data]);
  };

  const setAfterDelete = (data) => {
    setCart(data);
  };

  const setQueerydata = (data) => {
    setqueery(data);
  };

  const value = {
    isAuth,
    cart,
    total,
    Login,
    Logout,
    setProduct,
    setTotal,
    setAfterDelete,
    setUsers,
    users,
    setQueerydata,
    query,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
