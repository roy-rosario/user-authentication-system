import axios from 'axios'


export const profileCreate = async(user, password) =>{
        let placeholder

       return(
               await axios.post('http://localhost:4001/signup', {username: user, password: password})
               .then(result => {
                       placeholder = result.data
                       return placeholder
               })
               .catch(err => {
                       placeholder = err.response.data
                       return placeholder
               })
       )
}

export const profileAuthenticate = async(user, password)=>{
        let placeholder
        return(
                await axios.post('http://localhost:4001/login', {username: user, password: password})
                .then(result => {
                     placeholder = result.data
                     return placeholder
                  })
                .catch(err =>{
                        placeholder =err.response.data
                        return placeholder
                } )
        )
        
        
}

export const verification = async()=>{
       
        return(
                await axios.post('http://localhost:4001/verify', {token: localStorage.getItem('token')})
                .then(result => result)
                .catch(err => err)
        )
}

