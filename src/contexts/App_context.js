import { createContext,useState } from "react";
export const AppContext = createContext()
  

function AppContextProvider(props) {
   const [visit, setVisit] = useState(null)
    
    return(<AppContext.Provider value={{
        visit,
        setVisit
    }}>
        {props.children}

    </AppContext.Provider>
)
}
export default AppContextProvider