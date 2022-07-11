import {useState, useEffect} from 'react';

const useFetchAuthorized = (url) => {
    const[data,setData] = useState(null);
    const[isPending,setIsPending] = useState(true);
    const[error,setError] = useState(null);
    const[dataLenght,setdataLenght] = useState(null);

    const token = localStorage.getItem('token')
    const fetchConfig = {
        method: "GET",
        headers: new Headers({
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`,
        }),
        }

    useEffect(() => {
        fetch(url, fetchConfig)
        .then(res => {
            if(!res.ok){
                console.log(res);
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            console.log(data);
            console.log(data.length);
            setIsPending(false);
            setError(null);
            setdataLenght(data.length)
        })
        .catch(err => {
            setIsPending(false);
            setError(err.message);
        })
    },[url]);
    return {data, isPending,error,dataLenght}
}


export default useFetchAuthorized

// not possible to use it as value

