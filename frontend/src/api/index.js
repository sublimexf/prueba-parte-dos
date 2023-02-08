import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080/";

class Apio {
    getHeroes = async () => {
        return await axios({
            url: 'heroes',
            method: 'get'
        })
        .then( res => {
            return res.data
        } )
    }

    getBy = async (url, data) => {
        return await axios({
            url: 'search/' + url,
            method: 'get',
            params: {
                search_value: data
            }
        })
        .then( res => {
            return res.data
        } )
    }

    getPublishers = async () => {
        return await axios({
            url: 'publisher',
            method: 'get'
        })
        .then( res => {
            return res.data
        } )
    }

    getAlignments = async () => {
        return await axios({
            url: 'alignment',
            method: 'get'
        })
        .then( res => {
            return res.data
        } )
    }

    getGenders = async () => {
        return await axios({
            url: 'gender',
            method: 'get'
        })
        .then( res => {
            return res.data
        } )
    }

    newHero = async (hero) => {
        return await axios({
            url: 'heroes',
            method: 'post',
            data : hero
        })
        .then( res => {
            return res.status
        } )
    }

    deleteHero = async (id) => {
        return await axios({
            url: 'heroes/'+id,
            method: 'delete'
        })
        .then( res => {
            return res.status
        } )
    }

    updateHero = async (hero) => {
        return await axios({
            url: 'heroes/'+hero._id,
            method: 'patch',
            data : hero
        })
        .then( res => {
            return res.status
        } )
    }

}

let Api = new Apio();
export default Api;