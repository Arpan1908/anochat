import { useNavigate } from "react-router";

const { createContext, useState, useEffect } = require("react");

export const AContext = createContext();


const UserContext = ({children}) => {
    const [user, setUser] = useState({loggedIn:null});
    return(
        <AContext.Provider value={{user, setUser}}>
            {children}
        </AContext.Provider>

    )
}


export default UserContext;