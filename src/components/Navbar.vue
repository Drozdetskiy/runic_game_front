<template>
   <header class="main-navbar">
    <nav class="navbar-list">
      <ul>
        <li class="nav-tab">{{turn_text_culc()}}</li>
        <li class="nav-tab">Score: {{player_score}} : {{enemy_score}}</li>
        <li class="nav-tab"> Turn: {{turn}}</li>
      </ul>
    </nav>
   </header>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    turn: Number,
    turn_text: String,
    player_number: Number,
    player_score: Number,
    enemy_score: Number
  },
  methods: {
    turn_text_culc () {
        let active_player = this.turn % 2 ? 1 : 2
        let result = ''
        console.log('hello')
        if (active_player == this.player_number) {
          result = 'Your Turn'
        }
        else {
          result = 'Waiting for your opponent'
        }
        if (this.turn == 10) {
          if (this.player_score == this.enemy_score) {
            result = 'DRAW'
          }
          else if (this.player_score > this.enemy_score) {
            result = 'YOU WIN!'
          }
          else {
            result = 'YOU LOOSE'
          }
        }
        return result
      }
  },
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
</style>
