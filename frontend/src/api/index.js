import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080/";

class Apio {
    getHeroes = async () => {
        return await axios({
            url: 'heroes',
            method: 'get'
        })
        .then( res => {
            console.log(res.data)
            return res.data
        } )
    }
}

let Api = new Apio();
export default Api;