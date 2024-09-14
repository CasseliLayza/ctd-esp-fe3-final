import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "../../reducers/reducer";

export const ContextGlobal = createContext();
let loadFavs = JSON.parse(localStorage.getItem("favs")) || [];
export const initialState = { dentists: [], favs: loadFavs, theme: true };

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let url = "https://jsonplaceholder.typicode.com/users";

  const getDentists = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_DENTISTS", playload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDentists();
  }, []);

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [customer, setCstuomer] = useState({
    nameComplete: "",
    email: "",
    phoneNumber: 0,
  });

  const customerData = Object.entries(customer).map(([key, value]) => ({
    [key]: value,
  }));

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  const handleTheme = () => {
    dispatch({ type: "SWITCH_THEME", playload: !state.theme });
  };

  return (
    <ContextGlobal.Provider
      value={{
        dentists: state.dentists,
        state,
        dispatch,
        show,
        error,
        customer,
        setShow,
        setError,
        setCstuomer,
        customerData,
        theme: state.theme,
        handleTheme,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
