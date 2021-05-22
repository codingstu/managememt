import http from './index.js'

export const getCourseData=(data)=>{
    return http.get('https://jsonplaceholder.typicode.com/posts',data)
}   

export const loginUrl=(data)=>{
    return http.get('https://jsonplaceholder.typicode.com/posts',data)
}


export const registerUrl=(data)=>{
    return http.get('https://jsonplaceholder.typicode.com/posts',data)
}
