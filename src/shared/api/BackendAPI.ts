import Axios from 'axios'

const development = 'http://localhost:3002'
const production = 'https://tommytestapp-2021.herokuapp.com/'

const BackendAPI = Axios.create({
    baseURL: production,
    headers: {'Content-type': 'application/json'}
})

export default BackendAPI