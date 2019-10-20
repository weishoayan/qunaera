import axios from 'axios'





export let getHome = ()=>{
    return axios.get('/static/mock/index.json')
}

export let getCity = ()=>{
    return axios.get('/static/mock/city.json')
}

export let getDetails = (id)=>{
    return axios.get('/static/mock/detail/'+id+'.json')
}

export let getWeeks = (id)=>{
    return axios.get('/static/mock/week/'+id+'.json')
}