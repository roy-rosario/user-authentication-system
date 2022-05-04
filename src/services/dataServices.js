import axios from "axios"

export const getPosts = async() =>{
    let placeholder
    
    return(
        await axios.post('http://localhost:3001/posts', {token: localStorage.getItem('token')})
        .then(result =>{
            placeholder = result.data
            return placeholder
        })
        .catch(err=>{
            placeholder = err.response.data
            return  placeholder
        })
    )
}