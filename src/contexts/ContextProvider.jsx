import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    surveys: [],
    setCurrentUser: () => {

    },
    setUserToken: () => {

    }
});

const tmpSurveys = [
    {
        "id": 1,
        "title": "Test",
        "image_url": "https://www.w3schools.com/images/picture.jpg",
        "description": "This is testing survey"
    },
    {
        "id": 2,
        "title": "Test",
        "image_url": "https://www.w3schools.com/images/picture.jpg",
        "description": "This is testing survey"
    }
];

export const ContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({
        name: "Aakash",
        email: "prajapatiakash1021993@gmail.com"
    });
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN'));
    const [surveys, setSurveys] = useState(tmpSurveys);
    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem('TOKEN', token)
        } else {
            localStorage.removeItem('TOKEN')
        }
        _setUserToken(token);
    }
    

    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken,
            surveys
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);