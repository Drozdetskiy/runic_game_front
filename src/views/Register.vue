<template>
 <div>
   <form class="register" @submit="register">
     <h1>Sign in</h1>
     <label>User name</label>
     <input required v-model="username" type="text" placeholder="Snoopy"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <label>Confirm Password</label>
     <input required v-model="password2" type="password" placeholder="Password2"/>
     <hr/>
     <button type="submit">Register</button>
   </form>
 </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    login: function () {
    this.$http.post('http://127.0.0.1:8000/api/api-token-auth/', {'username': this.username, 'password': this.password}).then((resp) => {
      const token = resp.data.token
        localStorage.setItem('user-token', token) // store the token in localstorage
      this.$router.push('/')
    }).catch(err => {
      localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
    })
    },
    register: function () {
      if (this.password == this.password2) {
        this.$http.post('http://127.0.0.1:8000/api/users/register', {'username': this.username, 'password': this.password}).then((resp) => {
        this.login()
      }).catch(err => {
        console.log(err)
      })
      }
    
    }
    }

  }
</script>
