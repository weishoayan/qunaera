import axios from 'axios'





export let getHome = ()=>{
    return axios.get('/static/mock/index.json')
}

export let getCity = ()=>{
    return axios.get('/static/mock/city.json')
}