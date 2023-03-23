# Dynamic Content via Vue 2 and Axios
Example on how to to load external data via Vue.js and Axios.

## Vue.js
Vue is a progressive framework for building user interfaces.
- https://github.com/vuejs/vue

## Axios
Promise based HTTP client
- https://github.com/axios/axios

### Examples

#### GET()
`function getUserAccount() {
  return axios.get('/user/12345');
}`

#### POST()
`function getUserAccount() {
    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}`