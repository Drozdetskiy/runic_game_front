<template>
 <div>
   <div class=main-navbar>
      <p class="header-title">Signup</p>
    </div>
    <form class="login__container" @submit="register">
        <div class="login">
          <div class="data__container">
            <input class="input-data" required v-model="username" type="text" placeholder="Enter user name"/>
            <input class="input-data" required v-model="password" type="password" placeholder="Enter password"/>
            <input class="input-data" required v-model="password2" type="password" placeholder="Repeat password"/>
          </div>
          <div class="login-buttons__container">
            <button class="login-button" type="submit">Register</button>
          </div>
        </div>
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
    this.$http.post('http://165.22.109.108/api/api-token-auth/', {'username': this.username, 'password': this.password}).then((resp) => {
      const token = resp.data.token
        localStorage.setItem('user-token', token) // store the token in localstorage
      this.$router.push('/')
    }).catch(err => {
      localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
    })
    },
    register: function () {
      if (this.password == this.password2) {
        this.$http.post('http://165.22.109.108/api/users/register', {'username': this.username, 'password': this.password}).then((resp) => {
        this.login()
      }).catch(err => {
        console.log(err)
      })
      }
    
    }
    }

  }
</script>

<style scoped>

.main-navbar {
  background-color: #ffffff;
  height: 60px;
  width: 100%;
  position: fixed;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
  top: 0;
}

.header-title {
  margin: 0;
  padding: 20px;
  font-size: 23px;
}

.login__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 100px auto;
}

.login {
  width: 50%;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
  background-color: #ffffff;
}

.input-data {
  box-shadow: inset 1px 1px 10px rgba(0,0,0,0.5);
  width: 100%;
  border: none;
  padding: 10px;
  margin: 10px 0;
  font-family: "Quicksand", sans-serif;
  color: #797979;
  font-size: 16px;
}

button:focus, input:focus{
  outline: none;
}

.data__container {
  padding: 20px;
}

.login-buttons__container {
  padding: 0 20px 20px 20px;
  display:flex;
  justify-content:flex-end;
  align-items:center; 
}

.error-message {
  margin: 0;
  color: #9a2020;
}

.login-button {
  height: 40px;
  box-shadow: 6px 6px 20px 4px #2196F3;
  border: none;
  border-radius: 0;
  width: 30%;
  font-size: 16px;
  color: #797979;
}

button:hover {
  background-color: #efefef;
}

button:active {
  box-shadow: inset 3px 3px 9px 1px #2196F3;
}
</style>

