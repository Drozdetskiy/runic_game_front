<template>
    <div class="side-card-left" 
        v-bind:class="{hover: isActive, choose: isChoose}" 
        @mouseenter="mouseEnter" 
        @mouseleave="mouseLeave" 
        @click="mouseClick"
        >
        <img class="back-face" v-bind:class="{choose: isActive}" src="../assets/vue.svg" alt="Memory Card">
            <h2><span class="card-power-top-player" v-bind:class="{choose: isActive}">{{ top_power }}</span></h2>
            <h2><span class="card-power-bottom-player" v-bind:class="{choose: isActive}">{{ bot_power }}</span></h2>
            <h2><span class="card-power-left-player" v-bind:class="{choose: isActive}">{{ left_power }}</span></h2>
            <h2><span class="card-power-right-player" v-bind:class="{choose: isActive}">{{ right_power }}</span></h2>
    </div>
</template>

<script>
export default {
  name: 'SideCardLeft',
  props: {
    top_power: Number,
    bot_power: Number,
    left_power: Number,
    right_power: Number,
  },
  data () {
      return {
        isActive: false,
        isChoose: false
}
  },
  methods: {
      mouseEnter () {
          this.isActive = true
      },
      mouseLeave () {
          if (!this.isChoose) {
              this.isActive = false
          }
      },
      mouseClick () {
          this.isChoose = !this.isChoose
          this.$emit('choose', this)
          }
      }
}
</script>

<style scoped>
.back-face {
    width: 100%;
    height: 100%;
    padding: 20px;
    position: absolute;
    background: #333;
    backface-visibility: hidden;
}

.back-face.choose {
    border: 1px solid #2196F3;
    box-shadow: 0 0 15px #2196F3, inset 0 0 5px #2196F3;
}

.side-card-left {
    width: calc(100% - 10px);
    height: calc(33.333% - 10px);
    margin: 5px;
    position: relative;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    transition: 0.1s linear;
}

.side-card-left.hover {
    transform: translate(20px)
}

.side-card-left.choose {
    transform: translate(50px) scale(1.0);
    transition: transform .4s;
}

.side-card-left {
    transform: scale(0.97);
    transition: transform .2s;
}

.side-card-left.disappear {
    transform: scale(0);
    transition: transform 2.4s;
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
	letter-spacing		: -1px;
    padding			: 5px;
}

.card-power-top-player {
    text-align: right;
    top		: 0px;
    right	: 10px;    
}

.card-power-bottom-player {
    text-align: right;
    top		: 40px;
    right	: 10px;    
}

.card-power-left-player {
    text-align: right;
    top		: 20px;
    right	: 0px;    
}

.card-power-right-player {
    text-align: right;
    top		: 20px;
    right	: 20px;    
}

.card-power-top-player.choose,
.card-power-bottom-player.choose,
.card-power-left-player.choose,
.card-power-right-player.choose {
    color: #2196F3;
    text-shadow: 
    2px 2px 1px rgba(0,0,0,.4),
    0 0 20px #42A5F5,  
    0 0 40px rgba(33, 150, 243, .75),
    0 0 50px rgba(33, 150, 243, .75),
    0 0 60px rgba(33, 150, 243, .75);
}
</style>