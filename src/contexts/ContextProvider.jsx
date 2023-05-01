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
    const [userToken, setUserToken] = useState("d");
    const [surveys, setSurveys] = useState(tmpSurveys);

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