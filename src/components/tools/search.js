import React from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios';
import {API_KEY, BASE_URL} from '../../constant'
import {Form} from 'react-bootstrap'

export default function Search() {

    const dispatch = useDispatch();

    const handleUpdate = (event) => {
        const search = async () => {
            await axios.get(`https://${BASE_URL}/search/movie/${API_KEY}&query=${event.target.value}`)
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
             <Form.Control size="lg" type="text" placeholder="Search your movie"
                onChange={handleUpdate}/>
                           
        </div>
    )
}