import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {

    },
    setUserToken: () => {

    }
});

export const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({
        name: "Aakash",
        email: "prajapatiakash1021993@gmail.com"
    });
    const [userToken, setUserToken] = useState(null);

    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const userStateContext = () => useContext(StateContext);