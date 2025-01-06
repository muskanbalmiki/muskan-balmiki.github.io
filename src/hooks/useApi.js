import { useEffect, useState } from "react";

//CUTSOM HOOK
export const useApi = (url) => {

     const [data,setData]= useState(null);
     const [loading , setLoading] = useState(false);
     const [error , setError] = useState(null);

    useEffect(() => {
      setLoading(true);
      setData(null);
      setError(null);
          fetch(url)
                .then(res =>{
                  if (!res.ok){
                         setError("something went wrong.."+ res.stateText);
                   }
                   return res.json();
                })
               //server based err
                .then(json=> setData(json))
                .catch(err => {
                    console.log(err);
                    setError("something went wrong..."+ err.message);
                })
                .finally(() => {
                    setLoading(false);
                })
                
    
         },[url]);

         return {data, loading , error};
}

