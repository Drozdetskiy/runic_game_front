<template>
<div class="card flip">
    <div class="face enemy">
         <img class="card-view-enemy" src="../assets/red.png" alt="enemy_card">
        <h2><span class="card-power-top-player" v-bind:class="{choose: isActive}">{{ top_power }}</span></h2>
            <h2><span class="card-power-bottom-player" v-bind:class="{choose: isActive}">{{ bot_power }}</span></h2>
            <h2><span class="card-power-left-player" v-bind:class="{choose: isActive}">{{ left_power }}</span></h2>
            <h2><span class="card-power-right-player" v-bind:class="{choose: isActive}">{{ right_power }}</span></h2>
    </div>
    <div class="face player">
        <img class="card-view-player" src="../assets/blue.png" alt="player_card">
        <h2><span class="card-power-top-player" v-bind:class="{choose: isActive}">{{ top_power }}</span></h2>
            <h2><span class="card-power-bottom-player" v-bind:class="{choose: isActive}">{{ bot_power }}</span></h2>
            <h2><span class="card-power-left-player" v-bind:class="{choose: isActive}">{{ left_power }}</span></h2>
            <h2><span class="card-power-right-player" v-bind:class="{choose: isActive}">{{ right_power }}</span></h2>
    </div>
</div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'EnemyCardFlip',
  props: {
    top_power: Number,
    bot_power: Number,
    left_power: Number,
    right_power: Number,
    player_number: Number,
    enemy_number: Number,
    card_index: Number
  }
}
</script>

<style scoped>

.face {
    width: 100%;
    height: 100%;
    padding: 20px;
    position: absolute;

    background: #333;
    backface-visibility: hidden;
}

.face.enemy {
    border: 1px solid #ff005b;
    box-shadow: 0 0 15px #ff005b, inset 0 0 5px #ff005b;
    transform: rotateY(180deg);
}
.face.player {
    border: 1px solid #2196F3;
    box-shadow: 0 0 15px #2196F3, inset 0 0 5px #2196F3;
    transform: rotateY(0deg);
}

.card {
    width: 100%;
    height: 100%;
    margin: 5px;
    position: relative;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.5);
    transform: scale(1);
    transform-style: preserve-3d;
    transition: transform .5s;
    transform: rotate(180)
}

.card.flip {
          animation-name: flip;
          animation-duration: 1.4s;
          animation-fill-mode: forwards;
          animation-delay: 0s;
}

@keyframes flip {
  from { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); }
  to { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }
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

.card.appear{
    animation: scaling 2.4s linear 0s;
}

.card-view-enemy {
    max-width: 100%;
}

.card-view-player {
    max-width: 80%;
    max-height: 100%;
    padding-left: 15%;
}
</style>
