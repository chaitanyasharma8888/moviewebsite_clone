import React from "react";
import { createContext ,useContext,useEffect,useState} from "react";

const AppContext = createContext();

export const API_URL=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

const AppProvider = ({ children }) => {

    const [isLoading,setisLoading]=useState(true);
    const [movie,setMovie]=useState([]);
    const [isError,setError]=useState({show:"false",msg:""});
    const [query,setQuery]=useState("titanic");


    const getMovies=async(url)=>{
        setisLoading(true);
        try{
            const res=await fetch(url);
            const data=await res.json();//await kuiki promise return krega toa likhna hie pdega
            console.log(data);
            if(data.Response==="True")
            {
                setisLoading(false);
                setError({
                    show:"false",
                    msg:""
                })
                setMovie(data.Search);
            }
            else{
                setError({
                    show:"true",
                    msg:data.Error
                })
            }
        }
        catch(error){
            console.log(error)
        }

    }

useEffect(()=>{

    let timerOut=setTimeout(()=>{
    getMovies(`${API_URL}&s=${query}`);
},500);
return ()=>clearTimeout(timerOut);


},[query])

    return <AppContext.Provider value={{isLoading,movie,isError,query,setQuery}}>
        {children}
    </AppContext.Provider>
}


const useGlobalContext=()=>{
    return useContext(AppContext);
}


export { AppProvider, AppContext ,useGlobalContext};