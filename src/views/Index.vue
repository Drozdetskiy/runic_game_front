<template>
<div>
  <div class=main-navbar>
    <p class="header-title">Runic Game</p>
  </div>
  <div class="main-content__container">
    <div class="runic-game__container">
      <button class="action-button" @click="new_game">Start Game</button>
      <button class="action-button">Game History</button>
    </div>
    <div class="game-rules__container">
   </div>
    
   </div>
  </div>
 
</template>

<script>
export default {
  name: 'index',
  methods: {
    new_game: function () {
    
    let token = localStorage.getItem('user-token')

    this.$http.get('http://http://157.230.107.7/api/new_game/', {headers: { 'Authorization': `Token ${token}`}}).then((resp) => {
      this.$router.push(`/game/${JSON.parse(resp.data).game_hash}`)
    }).catch(err => {
      if (err.response.status == 401) {
        this.$router.push('/login')
      }
      
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

.main-content__container {
  margin: 60px auto;
  width: 600px;
}

.runic-game__container {
  display: flex;
  align-content: center;
  justify-content: center;
}

.action-button {
  height: 100px;
  box-shadow: 6px 6px 8px 1px rgba(0, 0, 0, 0.42);
  border: none;
  border-radius: 0;
  width: 50%;
  margin: 20px;
  font-size: 23px;
  color: #797979;
}

.game-rules__container {
  background-color: #ffffff;
  box-shadow: 6px 6px 8px 1px rgba(0, 0, 0, 0.42);
  padding: 20px;
  height: 450px;
  overflow: auto;
  margin: 20px;
}

.game-rules-description {
  margin: 0;
}


button:focus, input:focus{
  outline: none;
}

button:hover {
  background-color: #efefef;
}

button:active {
  box-shadow: inset 3px 3px 9px 1px rgba(0, 0, 0, 0.33);
}

</style>
