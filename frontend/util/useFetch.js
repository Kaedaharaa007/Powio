import axios from 'axios'
import { useEffect, useState } from 'react'

function useFetch(url){

    const[data, setData] = useState([]);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true);

    const fetchData = async ()=>{
        try {
            setLoading(true)
            const res = await axios.get(url)
            setData(res.data)//we want only the data not whole respond 
        } catch (error) {
            setError(error)
        } finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[url])

    return {data, error, loading, refetch: fetchData}
}

export default useFetch