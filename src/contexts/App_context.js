import { createContext,useState,useEffect } from "react";
import axios from "axios";
export const AppContext = createContext()
  

const AppContextProvider = (props) => {
    const getInfo = async() => {
        const response = await axios.get('https://data.cityofnewyork.us/resource/fn6f-htvy.json')
        // const info = response.data
        // console.log(info)
        setLocation(response)
      }
    useEffect(()=>{
      getInfo()
    },[])
    const [location,setLocation]= useState(null)
   const [visit, setVisit] = useState(null)
    
    return(<AppContext.Provider value={{
        visit,
        setVisit,getInfo,
        location,
        setLocation
    }}>
        {props.children}

    </AppContext.Provider>
)
}
export default AppContextProvider