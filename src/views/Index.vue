<template>
<div>
<div>
   <header class="main-navbar">
    <nav class="navbar-list">
      <ul>
        <li class="nav-tab"></li>
        <li class="nav-tab"></li>
        <li class="nav-tab"></li>
      </ul>
    </nav>
   </header>
 </div>

 <div class="sidebar">
  <div class="face player">
    <form class="login" @submit="new_game">
      <button type="submit">Find game</button>
    </form>
    </div>
    <div class="face player">
    <form class="login" @submit="new_game">
      <button type="submit">Find game</button>
    </form>
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

    this.$http.get('http://127.0.0.1:8000/api/new_game/', {headers: { 'Authorization': `Token ${token}`}}).then((resp) => {
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
  height: 40px;
  width: 100%;
  position: fixed;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
}

.navbar-list {
  text-align: center;
  padding: 10px
}

.navbar-list li{
  display: inline;
  padding: 20px 20px 20px 20px; 
}

.sidebar {
  margin: 500px;

    width: 300px;
    height: 500px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
}

.face {
    
    width: 50%;
    height: 50%;
    padding: 20px;
    position: relative;

    background: #333;
    backface-visibility: hidden;
}

.face.enemy {
    border: 1px solid #ff005b;
    box-shadow: 0 0 15px #ff005b, inset 0 0 5px #ff005b;
    /* transform: rotateY(180deg); */
}
.face.player {
    border: 1px solid #2196F3;
    box-shadow: 0 0 15px #2196F3, inset 0 0 5px #2196F3;
    /* transform: rotateY(0deg); */
}

.card {
    width: 100%;
    height: 100%;
    margin: 5px;
    position: relative;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
    transform: scale(1);
    transform-style: preserve-3d;
    transition: transform 1.5s;
}

.card.appear{
    animation: scaling 0.9s linear 0s;
}

@keyframes scaling {
    0%   { transform: scale(0); }
    100% { transform: scale(1); }
}

.card-power-top-player,
.card-power-bottom-player,
.card-power-left-player,
.card-power-right-player {
position: absolute;
width: 100%;
font-size: 1em;
font-family: "Quicksand", sans-serif;
font-weight: 500;
color: #ffffff;
text-shadow:
2px 2px 1px rgba(0,0,0,.4),
0 0 20px #f3e3e8,
0 0 40px rgba(255, 255, 255, 0.75),
0 0 50px rgba(255, 255, 255, 0.75),
0 0 100px rgba(255, 255, 255, 0.75);
letter-spacing: -1px;
padding: 5px;
}

.card-power-top-player {
    text-align: right;
    top: 0px;
    right: 10px;
}

.card-power-bottom-player {
    text-align: right;
    top: 40px;
    right: 10px;
}

.card-power-left-player {
    text-align: right;
    top: 20px;
    right: 20px;
}

.card-power-right-player {
    text-align: right;
    top: 20px;
    right: 0px;
}

</style>
