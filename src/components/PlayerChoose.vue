<template>
<div class="card" v-bind:class="{disappear: isDisappear}" @click="mouseClick">
    <div class="choose-face">
       <span class="choose-text">Click</span>
    </div>
</div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'PlayerChoose',
  props: {
      card_index: Number
  },
  data () {
    return {
      isDisappear: false
    }
  },
  methods: {
    //   mouseEnter () {
    //       this.isActive = true
    //   },
    //   mouseLeave () {
    //       if (!this.isChoose) {
    //           this.isActive = false
    //       }
    //   },
      mouseClick () {
          this.$emit('cardPlacing', this.card_index)
          }
      },
mounted () {
    this.$root.$on('disappear', ((card_position) => {
      if (this.card_index == card_position) {
        this.isDisappear = true
      }
    }))
},
}
</script>

<style scoped>

.choose-face {
    width: 100%;
    height: 100%;
    padding: 20px;
    position: absolute;
    background: #333;
}

.choose-face {
    border: 1px solid #ffffff;
    box-shadow: 0 0 15px #ffffff, inset 0 0 5px #cafff3;
    text-align: center;
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
    text-align: center;
    vertical-align: middle;
}

.card.disappear {
    transform: scale(0);
    transition: transform .4s;
}

.choose-text {
position: relative;
width:100px;
height: 100%; 
text-align: center;
vertical-align: middle;
margin: auto;
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
