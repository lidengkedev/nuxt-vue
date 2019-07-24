import Axios from 'axios'

const options = {}

if (process.server) {
    options.baseUrl = 'http://localhost:4000'
}

export default Axios.create(options)
