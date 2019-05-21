<template>
 <div>
    <div class=main-navbar>
      <p class="header-title">Login</p>
    </div>
    <div class="login__container">
        <form class="login" @submit="login">
          <div class="data__container">
            <input class="input-data" required v-model="username" type="text" placeholder="Enter user name"/>
            <input class="input-data" required v-model="password" type="text" placeholder="Enter password"/>
          </div>
          <div class="login-buttons__container">
            <button class="login-button" type="submit">Login</button>
          </div>
        </form>
    </div>

 </div>
</template>

<script>
import { Stream } from 'stream';
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
  login: function () {
    this.$http.post('http://157.230.107.7/api/api-token-auth/', {'username': this.username, 'password': this.password}).then((resp) => {
      const token = resp.data.token
        localStorage.setItem('user-token', token)
      this.$router.push('/')
    }).catch(err => {
      localStorage.removeItem('user-token')
    })
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

