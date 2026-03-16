import axios from 'axios'
import { useEffect, useState } from 'react'

function useFetch(url){

    const[data, setData] = useState([]);
    const[error, setError] = useState(false);
    const[loading, setLoading] = useState(null);

    useEffect(()=>{
        setLoading(true)
        axios.get(url)
        .then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
        .catch((error)=>{
            setError(error)
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[url])

    return {data, error, loading}
}

export default useFetch