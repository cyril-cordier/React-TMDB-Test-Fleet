import React from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios';
import {API_KEY, BASE_URL} from '../../constant'

export default function Search() {

    const dispatch = useDispatch();

    const handleUpdate = (event) => {
        const search = async () => {
            await axios.get(`${BASE_URL}/search/movie/${API_KEY}&query=${event.target.value}`)
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