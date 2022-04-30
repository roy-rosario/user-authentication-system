import axios from 'axios'


export const profileCreate = async(user, password) =>{
       return await axios.post('http://localhost:4001/signup', {username: user, password: password})
}

export const logIn = async({username, password})=>{
        let placeholder
        return(
                await axios.post('http://localhost:4001/login', {username: username, password: password})
                .then(result => {
                     placeholder = result.data
                     return placeholder
                  })
                .catch(err => alert(err.response.data))
        )
        
        
}

export const verification = async()=>{
       
        return(
                await axios.post('http://localhost:4001/verify', {token: localStorage.getItem('token')})
                .then(result => result)
                .catch(err => err)
        )
}

