import React, { useEffect, useState } from "react"

export const useFetch = (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null, //lista de estados
        loading: true, //enquanto carrega pois os dados nao chegaram ainda
    })

    useEffect(function() {
        fetch(url, {method})
            .then(resp => resp.json())
            .then(json => setResponse({
                data: json,
                loading: false}))

    }, [url, method])
    
    return response
}