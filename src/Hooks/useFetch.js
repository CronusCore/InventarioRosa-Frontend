import { useEffect, useState} from "react"

const useFetch = (url, {method='GET', headers={'accept':"application/json"}} ={} ) =>
{

    
    const [error, setError] = useState(null);
    const [isSuccess, setIsSuccess] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() =>{
        const getData = async () => {
            try{
                const response = await fetch(url, {
                    method: method,
                    headers
                });
                
                const jsonData = await response.json();
    
                if(!response.ok){
                    setIsSuccess(false);
                    setError({message: response.statusText, code: response.statusCode});
                }else{
                    setIsSuccess(true);
                    setData(jsonData);
                }

                
    
            }catch(err){
                setIsSuccess(false);
                setError({message: err.message});
            }
            console.log(data)


        }
        getData();

    },[url]);

    return [isSuccess, error, data];
}

export default useFetch;