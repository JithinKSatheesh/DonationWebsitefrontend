const API = 'http://localhost:8000/api'

export const signUp = user => {
    // console.log(name, email, password)
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => {
        console.log(res)
        return res.json()
    }).catch(err => {
        console.log(err)
    })
}

export const signIn = user =>{
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(res => {
        console.log(res)
        if(res){
            return res.json()
        }
    }).catch(err => {
        console.log(err,"error")
        return {
            error:'Failed to fetch data'
        }
    })
}

export const authenticate = (data, next)=>{
    if(typeof window != 'undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next()
    }
}

export const signOut = (next) => {
    if(typeof window != 'undefined'){
        localStorage.removeItem('jwt',JSON.stringify())
        next()
        return fetch(`${API}/signout`,{
                method:'GET'
            }).then(response =>{
                console.log('signout', response)
            }).catch(err=>{
                console.log(err)
            })
    }
}

export const isAuthenticated = () => {
    if(typeof window == 'undefined'){
        return false
    }
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }
}