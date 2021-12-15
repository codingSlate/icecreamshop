import axios from 'axios'

export const getMenu =()=>{
    return axios.get('/api/menu').then(res=>{
        return res.data.sort((a, b)=>{
            if(a.iceCream.name < b.iceCream.name){ return -1}
            if(a.iceCream.name > b.iceCream.name){ return 1}
            return 0
        })
    })
}
