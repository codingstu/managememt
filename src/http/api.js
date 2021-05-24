import http from './index.js'

// const appkey = 'dZ7BW88fdd9c5503ff5b18ccd72210297e5a675856c1cba'
export const getCourseData=(data)=>{
    return http.get('?apiKey=dZ7BW88fdd9c5503ff5b18ccd72210297e5a675856c1cba&city=广州市',data)
      
    //   return http({
    //     method: 'get',
    //     url: '?apiKey=dZ7BW88fdd9c5503ff5b18ccd72210297e5a675856c1cba&type=参数1',data
    //   })
        
}
// https://api.apishop.net/common/air/getCityPM25Detail?apiKey=dZ7BW88fdd9c5503ff5b18ccd72210297e5a675856c1cba&city=%E5%B9%BF%E5%B7%9E%E5%B8%82

export const loginUrl=(data)=>{
    return http.get('https://jsonplaceholder.typicode.com/posts',data)
}
// https://api.apishop.net/common/air/getCityPM25Detail/?apiKey=dZ7BW88fdd9c5503ff5b18ccd72210297e5a675856c1cba&city=%E5%B9%BF%E5%B7%9E%E5%B8%82
// https://api.apishop.net/common/air/getCityPM25Detail?apiKey=dZ7BW88fdd9c5503ff5b18ccd72210297e5a675856c1cba
// https://api.apishop.net/common/air/getCityPM25Detail?apiKey=dZ7BW88fdd9c5503ff5b18ccd72210297e5a675856c1cba&city=%E5%B9%BF%E5%B7%9E%E5%B8%82
export const registerUrl=(data)=>{
    return http.get('https://jsonplaceholder.typicode.com/posts',data)
}
