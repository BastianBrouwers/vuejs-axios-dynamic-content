$(document).ready(function() {
    new Vue({
        el: '.external-content__table',
        data () {
            return {
                users: null
            }
        },
        created: function() {
            this.loadUsers();
        },
        methods: {
            loadUsers: function() {
                axios
                .get('https://jsonplaceholder.typicode.com/users')
                .then(users => (this.users = users.data))
                .catch(error => (console.error(error)))
            }
        }
    })
})