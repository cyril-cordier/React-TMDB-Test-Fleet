import React from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios';

export default function Search() {

    const dispatch = useDispatch();

    const handleUpdate = (event) => {
        const search = async () => {
            await axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=612b8c457fd937136c063352f41e09ca&query=${event.target.value}`)
            .then(response => {
                dispatch({
                    type: 'SEARCH',
                    payload: response.data.results
                })
                //console.log('reponse', response.data.results)
            })
            .catch(e => {
                console.log(e)
            })
        }
        search()


        
    }

    return (
        <div>
             <input 
                type="text"
                name="search"
                placeholder="Chercher un film"
                onChange={handleUpdate}
                />            
        </div>
    )
}