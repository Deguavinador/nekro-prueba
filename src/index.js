const axios = require("axios")
const greet = name => 'Hello ' + name;

const users = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users?_limit=2')
    return res.data
}
users().then( res => console.log(res))

module.exports = {
    users,
    greet
}
